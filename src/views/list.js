import React, { Component } from "react";

import TableItems from "./../components/tableItems.js";
import Header from "./../components/header.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    fetch(`http://localhost:3001/items`)
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(items =>
        this.setState({
          items
        })
      );
  }
  render() {
    return (
      <>
        <Header title="Lista de Ítems" />
        {this.state.items.length ? <TableItems items={this.state.items} /> : false}
      </>
    );
  }
}
export default List;
