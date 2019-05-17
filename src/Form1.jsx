import React, { Fragment } from "react";
import { Button, Form, Icon, Segment } from "semantic-ui-react";

// class Form1 extends Component {
//   render() {
//     const options = [
//       { key: "Mr", text: "Mr", value: "Mr" },
//       { key: "Mrs", text: "Mrs", value: "Mrs" }
//     ];
//     return (
//       <Fragment>
//         <Form>
//           {/* <Label basic>
//             <Header
//               as="h4"
//               icon={{ name: "user circle" }}
//               content="Personal data"
//             />
//           </Label>
//           <Divider /> */}
//           <Segment attached>
//             <Form.Group widths="equal">
//               <Form.Input fluid label="First Name" placeholder="First name" />
//               <Form.Input fluid label="Middle Name" placeholder="Middle name" />
//               <Form.Input fluid label="Last Name" placeholder="Last name" />
//             </Form.Group>
//             <Form.Field control="input" type="date" label="Date of birth" />
//           </Segment>
//           <Button
//             attached="bottom"
//             content="Save and Continue"
//             basic
//             color="olive"
//           />
//         </Form>
//       </Fragment>
//     );
//   }
// }

// export default Form1;

// export const Form1 = ({
//   nextPage,
//   handleChange,
//   values: { firstName, middleName, lastName, dob }
// }) => {
export const Form1 = ({
  nextPage,
  handleChange,
  values: { firstName, middleName, lastName, dob }
}) => {
  return (
    <Fragment>
      <Form>
        {/* <Label basic>
                <Header
                  as="h4"
                  icon={{ name: "user circle" }}
                  content="Personal data"
                />
              </Label>
              <Divider /> */}
        <Segment attached>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="firstName"
              label="First Name"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="middleName"
              label="Middle Name"
              placeholder="Middle name"
              value={middleName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="lastName"
              label="Last Name"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field
            control="input"
            type="date"
            name="dob"
            label="Date of birth"
            value={dob}
            onChange={handleChange}
          />
        </Segment>
        <Button
          animated
          attached="bottom"
          basic
          color="green"
          onClick={nextPage}
        >
          <Button.Content visible>Save and Continue</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Form>
    </Fragment>
  );
};
