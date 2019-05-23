import React, { Fragment } from "react";
import { Button, Form, Icon, Segment } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

export const Form1 = ({
  nextPage,
  handleChange,
  values: { firstName, middleName, lastName, dob, gender }
}) => {
  return (
    <Fragment>
      <Form>
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
          <DateInput
            name="dob"
            placeholder="Date Of Birth"
            value={dob}
            iconPosition="left"
            onChange={handleChange}
          />
          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio
              name="gender"
              label="Male"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
            <Form.Radio
              name="gender"
              label="Female"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />
          </Form.Group>
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
