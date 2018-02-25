import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { SearchZomato } from "../actions";

const apikey = `0d5e7f12d83b2106c5de9c090c567a14`;
let cityUrl;
let so;
let cuisineUrl;

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state={
            city: "",
            cuisine: "",
            result: ""
        }
        
    }

    onFormSubmit(event){
        event.preventDefault();
        cityUrl = `https://developers.zomato.com/api/v2.1/locations?apikey=${apikey}&query=${this.state.city}`
        so = this;
        var request = axios.get(cityUrl)
            .then(function (response) {
                if(response.data.location_suggestions[0]){
                    so.setState({result : {latitude: response.data.location_suggestions[0].latitude, longitude: response.data.location_suggestions[0].longitude, cuisine: so.state.cuisine}})
                    cuisineUrl= `https://developers.zomato.com/api/v2.1/cuisines?apikey=${apikey}&lat=${response.data.location_suggestions[0].latitude}&lon=${response.data.location_suggestions[0].longitude}`
                    var cuisinesreq = axios.get(cuisineUrl)
                        .then(function (response) {
                            response.data.cuisines.map((cuisine) => {
                                if(cuisine.cuisine.cuisine_name.toUpperCase() === so.state.cuisine.toUpperCase()){
                                    console.log(cuisine.cuisine.cuisine_id);
                                    so.props.SearchZomato(so.state.result, cuisine.cuisine.cuisine_id);
                                    
                                }
                            });
                        })
                }
                // so.props.SearchZomato(so.state.result);
            });
    }

    render(){
        return(
            <form className="input-group mb-3"
            onSubmit={this.onFormSubmit.bind(this)}
            >
                <input type="text" id="cityinput" className="form-control" placeholder="City"
                value={this.state.city}
                onChange={event => this.setState({city: event.target.value})}
                />
                <input type="text" className="form-control" placeholder="Cuisine"
                value={this.state.cuisine}
                onChange={event => {this.setState({cuisine: event.target.value})}}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </div>
            </form>
        );
    }
}

export default connect (null, { SearchZomato })(SearchBar);