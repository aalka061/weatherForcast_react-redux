import React, {Component} from 'react'
import {connect} from 'react-redux'



class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>{cityData.list[0].main.temp}</td>
                <td>{cityData.list[0].main.pressure}</td>
                <td>{cityData.list[0].main.humidity}</td>
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