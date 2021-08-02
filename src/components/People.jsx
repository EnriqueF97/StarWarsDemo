import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default class People extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = this.props.planetInfo;
  }

  componentDidMount() {
    console.log("State mounted", this.state);
  }

  componentDidUpdate() {}
  render() {
    const { info } = this.props;
    return (
      <Row
        style={{
          background: "lightGray",
          color: "black",
          borderRadius: "15px",
          width: "100%",
          padding: "1em",
        }}>
        <Col
          xs={12}
          sm={6}
          style={{
            background: "rgb(189, 189, 189)",
            borderRadius: "15px",
            padding: "1em 1em",
            textAlign: "center",
          }}>
          <h1 style={{ margin: "1em 0" }}>{info.name}</h1>
          <h4>Altura: {info.height} centimetros</h4>
          <h4>Peso: {info.mass} Kilos</h4>
          <h4>
            Género:{" "}
            {info.gender === "male" ? "Masculino" : info.gender === "female" ? "Femenino" : "No aplica"}
          </h4>
          <h4>Año de nacimiento: {info.birth_year}</h4>
        </Col>
        <Col xs={12} sm={6} style={{ padding: "0 0.5em" }}>
          <Image
            style={{
              borderRadius: "15px",
              margin: "0 0.5em",
              width: "500px",
              height: "500px",
              objectFit: "cover",
            }}
            src={`/images/${info.name}.jpg`}
            fluid
            alt='Personaje'
          />
        </Col>
      </Row>
    );
  }
}
