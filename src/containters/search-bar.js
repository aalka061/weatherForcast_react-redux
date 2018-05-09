import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

// the goal is to hookup fetch weather action to our search bar container 

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
       // console.log(event.target.value)
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}className="input-group">
                <input 
                placeholder="Get five days forcast in your favorite cities"
                className="form-control"
                value={this.state.term} 
                onChange = {this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit</button> 


                </span>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}
// null because mapDispatchToProps always comes as second argument
export default connect (null, mapDispatchToProps)(SearchBar);