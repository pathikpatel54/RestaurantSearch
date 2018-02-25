import React, { Component } from 'react';
import SearchBar from "./search_bar"
import SearchList from "./search_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}
