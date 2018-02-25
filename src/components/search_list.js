import React, { Component } from "react";
import { connect } from "react-redux";

class SearchList extends Component {
    renderList(){
        return this.props.resta.map((restaurant) => {
            return(
                <li className="list-group-item" key={restaurant.restaurant.R.res_id}>
                    <img src={restaurant.restaurant.thumb} className="img-thumbnail float-left" />                   
                    <h4>
                        {restaurant.restaurant.name}
                    </h4>
                    <p>{restaurant.restaurant.location.locality_verbose}</p>
                    <small><strong>Ratings:</strong> {restaurant.restaurant.user_rating.aggregate_rating}/5.0 ({restaurant.restaurant.user_rating.votes} votes)</small>
                    <small><strong>Cuisines:</strong> {restaurant.restaurant.cuisines}</small>
                    <small><strong>Address:</strong> {restaurant.restaurant.location.address}</small>
                    <small><strong>Cost for two:</strong> ₹{restaurant.restaurant.average_cost_for_two}</small>
                </li>
            );
        });
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToPropes(state){
    return{
        resta: state.resta
    }
}

export default connect (mapStateToPropes)(SearchList)