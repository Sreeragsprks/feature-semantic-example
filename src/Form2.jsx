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
            <Form.Input
              name="emailId"
              label="Email Address"
              value={emailId}
              placeholder="Email address"
              onChange={handleChange}
            />
            <Form.Input
              name="phoneContact"
              label="Phone Number"
              value={phoneContact}
              placeholder="xxx xxx xxxx"
              onChange={handleChange}
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
