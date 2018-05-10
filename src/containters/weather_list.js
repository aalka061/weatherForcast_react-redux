import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humids = cityData.list.map(weather => weather.main.humidity);


        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                   <Chart data={temps} color="orange" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="mPa" />
                </td>
                <td>
                     <Chart data={humids} color="red" units="%" />
                 </td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (mPa)</th>
                        <th>Humadity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){

    return {weather};
}

export default connect(mapStateToProps)(WeatherList); 