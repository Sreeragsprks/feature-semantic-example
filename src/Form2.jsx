import React from "react";
import {
  Button,
  Form,
  Icon,
  Segment,
  ButtonGroup,
  FormGroup
} from "semantic-ui-react";

export const Form2 = ({
  nextPage,
  prevPage,
  handleChange,
  values: { gender, emailId, phoneContact }
}) => {
  return (
    <React.Fragment>
      <Segment attached>
        <Form>
          <FormGroup widths="equal">
            <Form.Radio
              name="gender"
              label="Male"
              value="male"
              checked={gender === "male"}
            />
            <Form.Radio
              name="gender"
              label="Female"
              value="Female"
              checked={gender === "female"}
            />
          </FormGroup>
          <FormGroup widths="equal">
            <Form.Field
              name="emailId"
              label="Email Address"
              control="input"
              type="email"
              value={emailId}
              placeholder="Email address"
            />
            <Form.Input
              name="phoneContact"
              label="Phone Number"
              value={phoneContact}
              placeholder="xxx xxx xxxx"
            />
          </FormGroup>
        </Form>
      </Segment>
      <ButtonGroup fluid>
        <Button
          animated
          attached="bottom"
          basic
          color="green"
          onClick={prevPage}
        >
          <Button.Content visible>Go Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button.Or />
        <Button
          positive
          content="submit"
          attached="bottom"
          basic
          // color="olive"
          // onClick={nextPage}
        />
      </ButtonGroup>
    </React.Fragment>
  );
};
