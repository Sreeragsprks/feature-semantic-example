import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "./RegisterFrom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

function App() {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
