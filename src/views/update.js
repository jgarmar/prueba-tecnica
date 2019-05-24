import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UpdateForm from "./../components/updateForm.js";
import Header from "./../components/header.js";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false,
      redirect: false
    };
  }

  onSubmitForm(itemModified) {

    var idItem = itemModified.id;
    fetch(`http://localhost:3001/items/${idItem}`, {
      method: "PUT",
      body: JSON.stringify(itemModified),
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
    if (this.state.redirect) {
      return <Redirect push to="/list" />;
    }
      return (
        <>
          <Header title="Modificar Ítem" />
          {this.state.item ? 
          <UpdateForm
            item={this.state.item}
            onSubmitForm={e => this.onSubmitForm(e)}
            onChangeHandle={this.onChangeHandle}
          /> 
          : false}
        </>
      );
   
  }
}
export default Update;
