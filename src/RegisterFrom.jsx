import React from "react";
import { Label, Header, Divider } from "semantic-ui-react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      pageCount: 1,
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      gender: "",
      emailId: "",
      phoneContact: ""
    };
  }

  nextPage = () => {
    this.setState(
      prevState => ({
        ...prevState,
        pageCount: prevState.pageCount + 1
      }),
      () => alert(this.state)
    );
  };

  previousPage = () => {
    this.setState(prevState => ({
      ...prevState,
      pageCount: prevState.pageCount - 1
    }));
  };

  handleChange = (e, { name, value }) => {
    console.log("debug:", { name, value });
    this.setState(
      prevState => ({ ...prevState, [name]: value })
      // () => console.log("debug:", this.state)
    );
  };

  render() {
    const { pageCount } = this.state;

    switch (pageCount) {
      case 1:
        return (
          <React.Fragment>
            <Label basic>
              <Header
                as="h4"
                icon={{ name: "user circle" }}
                content="Personal data"
              />
            </Label>
            <Divider />
            <Form1
              nextPage={this.nextPage}
              values={this.state}
              handleChange={this.handleChange}
            />
          </React.Fragment>
        );

      case 2:
        return (
          <React.Fragment>
            <Label basic>
              <Header
                as="h4"
                icon={{ name: "address book" }}
                content="Contact data"
              />
            </Label>
            <Divider />
            <Form2
              nextPage={this.nextPage}
              prevPage={this.previousPage}
              handleChange={this.handleChange}
              values={this.state}
            />
          </React.Fragment>
        );

      default:
        break;
    }
  }
}

export default RegisterForm;
