import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import SimpleCard from "./Card.js";
import jsonData from "./Orders.json";
import "./index.css";
import GoogleLogin from "react-google-login";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "", username: "", login: "false", data: jsonData };
  }

  addRecordHandler(newRecord) {
    let jsonData = this.state.data;
    jsonData.push(newRecord);
    this.setState({
      data: jsonData
    });
  }

  deleteRecordHandler(id) {
    let jsonData = this.state.data;
    jsonData = jsonData.filter(data => {
      return data.id !== id;
    });
    this.setState({
      data: jsonData
    });
  }
  editRecordHandler(newRecord) {
    let jsonData = this.state.data;

    jsonData = jsonData.filter(data => {
      if (data.id === newRecord.id) {
        data.id = newRecord.id;
        data.customer_name = newRecord.customer_name;
        data.customer_email = newRecord.customer_email;
        data.product = newRecord.product;
        data.quantity = newRecord.quantity;
      }
      return data;
    });
    this.setState({ data: jsonData });
  }
  onResponse(response) {
    console.log(response);
    this.setState({
      image: response.profileObj.imageUrl,
      username: response.profileObj.name,
      login: "true"
    });
  }

  render() {
    if (this.state.login === "true") {
      return (
        <div>
          <Menu username={this.state.username} image={this.state.image} />

          <SimpleCard
            addRecordHandler={this.addRecordHandler.bind(this)}
            jsonData={this.state.data}
            deleteRecordHandler={this.deleteRecordHandler.bind(this)}
            editRecordHandler={this.editRecordHandler.bind(this)}
          ></SimpleCard>
        </div>
      );
    } else {
      return (
        <GoogleLogin
          className="googleLogin"
          clientId="380576729223-su4et6emak3dp02dseival0kfl656omq.apps.googleusercontent.com"
          buttonText="Click to Login"
          onSuccess={this.onResponse.bind(this)}
          cookiePolicy={"single_host_origin"}
        />
      );
    }
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
