import React, { Component } from "react";
import { Link } from "react-router-dom";
class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  submitForm() {
    var item = this.state.item;
    this.props.onSubmitForm(item);
  }

  render() {
    return (
      <div className="form delete">
        <div className="container">
          <div className="field">
            <label>id:</label>
            <input type="text" disabled defaultValue={this.props.item["id"]} />
          </div>
          <div className="field">
            <label>name:</label>
            <input
              type="text"
              disabled
              defaultValue={this.props.item["name"]}
            />
          </div>
          <div className="field">
            <label>quantity:</label>
            <input
              type="text"
              disabled
              defaultValue={this.props.item["quantity"]}
            />
          </div>
          <div className="field">
            <label>cost:</label>
            <input
              type="text"
              disabled
              defaultValue={this.props.item["cost"]}
            />
          </div>
        </div>
        <button onClick={e => this.submitForm(e)}>Eliminar</button>
        <button className="returnBtn">
          <Link to={"/list"}>Volver a la lista</Link>
        </button>
      </div>
    );
  }
}
export default DeleteForm;
