import React from "react";
class AddRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {
        id: props.selectedData.id,
        customer_name: props.selectedData.name,
        customer_email: props.selectedData.mail,
        product: props.selectedData.product,
        quantity: props.selectedData.quantity
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddInputs = this.onAddInputs.bind(this);
  }

  onInputChange(e) {
    let currentData = this.state.currentData;
    currentData[e.target.name] = e.target.value;
    this.setState({
      currentData: currentData
    });
  }
  onAddInputs(e) {
    this.props.onModalClose();
    this.props.editRecordHandler(this.state.currentData);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {/* <form> */}
          <label>Id: </label>
          <input
            type="text"
            name="id"
            disabled
            value={this.state.currentData.id}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <label>Customer Name: </label>
          <input
            type="text"
            name="customer_name"
            value={this.state.currentData.customer_name}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <label>Customer Mail: </label>
          <input
            type="text"
            name="customer_email"
            value={this.state.currentData.customer_email}
            onChange={this.onInputChange}
          />
          <br />
          <br />

          <label>Product: </label>

          <select name="product" onChange={this.onInputChange}>
            <option value={"Product 1"}>Product 1</option>
            <option value={"Product 2"}>Product 2</option>
            <option value={"Product 3"}>Product 3</option>
          </select>
          <br />
          <br />
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={this.state.currentData.quantity}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <button onClick={this.onAddInputs}>Update</button>
          {/* </form> */}
        </div>
      </React.Fragment>
    );
  }
}

export default AddRecord;
