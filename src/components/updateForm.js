import React, { Component } from "react";
import { Link } from "react-router-dom";
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      itemModified: this.props.item
    };
  }
  onChangeHandle(key, e) {
    var value = e.target.value;
    let itemModified = Object.assign({}, this.state.itemModified);
    itemModified[key] = value;
    this.setState({ itemModified });
  }
  submitForm() {
    var itemModified = this.state.itemModified;
    this.props.onSubmitForm(itemModified);
  }

  render() {
    return (
      <div className="form edit">
        <div className="container">
          <div className="field">
            <label>id:</label>
            <input
              className="id"
              type="text"
              disabled
              onChange={e => this.onChangeHandle("id", e)}
              defaultValue={this.props.item["id"]}
            />
          </div>
          <div className="field">
            <label>name:</label>
            <input
              className="name"
              type="text"
              onChange={e => this.onChangeHandle("name", e)}
              defaultValue={this.props.item["name"]}
            />
          </div>
          <div className="field">
            <label>quantity:</label>

            <input
              className="quantity"
              type="text"
              onChange={e => this.onChangeHandle("quantity", e)}
              defaultValue={this.props.item["quantity"]}
            />
          </div>
          <div className="field">
            <label>cost:</label>
            <input
              className="cost"
              type="text"
              onChange={e => this.onChangeHandle("cost", e)}
              defaultValue={this.props.item["cost"]}
            />
          </div>
        </div>
        <button onClick={e => this.submitForm(e)}>Guardar</button>
        <button className="returnBtn">
          <Link to={"/list"}>Volver a la lista</Link>
        </button>
      </div>
    );
  }
}
export default UpdateForm;
