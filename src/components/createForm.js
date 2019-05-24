import React, { Component } from "react";
import { Link } from "react-router-dom";
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="form create">
        <div className="container">
          <div className="field">
            <label>name:</label>
            <input
              name="name"
              type="text"
              onChange={e => this.onChangeHandle("name", e)}
            />
          </div>
          <div className="field">
            <label>quantity:</label>
            <input
              name="quantity"
              type="text"
              onChange={e => this.onChangeHandle("quantity", e)}
            />
          </div>
          <div className="field">
            <label>cost:</label>
            <input
              name="cost"
              type="text"
              onChange={e => this.onChangeHandle("cost", e)}
            />
          </div>
        </div>
        <button onClick={e => this.submitForm(e)}>Crear</button>
        <button className="returnBtn">
          <Link to={"/list"}>Volver a la lista</Link>
        </button>
      </div>
    );
  }
}
export default CreateForm;
