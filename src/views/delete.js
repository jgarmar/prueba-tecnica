import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DeleteForm from "./../components/deleteForm.js";
import Header from "./../components/header.js";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false
    };
  }

  onSubmitForm(item) {
    var idItem = item.id;
    fetch(`http://localhost:3001/items/${idItem}`, {
      method: "DELETE"
    })
      .catch(err => console.error(err))
      .then(() => {

        this.setState({
          redirect: true
        });
      });
  }
  componentWillMount() {
    var idItem = this.props.match.params.id;

    fetch(`http://localhost:3001/items/${idItem}`)
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(item =>
        this.setState({
          item,
          itemModified: item
        })
      );
  }
  render() {
    if (this.state.item) {
      if (this.state.redirect) {
        return <Redirect push to="/list" />;
      }
      return (
        <>
          <Header title="Eliminar Ítem" />
          <DeleteForm
            item={this.state.item}
            onSubmitForm={e => this.onSubmitForm(e)}
          />
        </>
      );
    } else {
      return false;
    }
  }
}
export default Delete;
