import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humids = cityData.list.map(weather => weather.main.humidity);


        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Sparklines width={40} height={20} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>

                </td>
                <td>
                    <Sparklines width={40} height={20} data={pressures}>
                        <SparklinesLine color="gray" />
                    </Sparklines>

                </td>
                <td>
                    <Sparklines width={40} height={20} data={humids}>
                        <SparklinesLine color="red" />
                    </Sparklines>
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
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humadity</th>
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