import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CreateForm from "./../components/createForm.js";
import Header from "./../components/header.js";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false,
      redirect: false
    };
  }
  onSubmitForm(newItem) {
    fetch(`http://localhost:3001/items`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => console.error(err))
      .then(() => {
        this.setState({
          redirect: true
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/list" />;
    }
    return (
      <>
        <Header title="Nuevo Ítem" />
        <CreateForm
          onSubmitForm={e => this.onSubmitForm(e)}
          onChangeHandle={this.onChangeHandle}
        />
      </>
    );
  }
}
export default Create;
