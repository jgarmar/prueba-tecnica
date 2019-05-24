import React, { Component } from "react";
import { Link } from "react-router-dom";
class TableItems extends Component {
  render() {
    var rows = this.props.items.map((item, key) => {
      return (
        <tr key={key}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.cost}</td>
          <td>
            <button>
              <Link className="editBtn" to={"/update/" + item.id}>
                Editar
              </Link>
            </button>
            <button>
              <Link className="delBtn" to={"/delete/" + item.id}>
                Eliminar
              </Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
          {
            <tr>
              <th>id</th>
              <th>name</th>
              <th>quantity</th>
              <th>cost</th>
            </tr>
          }
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <Link className="newBtn" to={"/create"}>
                Nuevo Ítem
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
export default TableItems;
