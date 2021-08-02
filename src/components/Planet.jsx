import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default class Planet extends Component {
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
          sm={12}
          md={12}
          lg={6}
          style={{
            background: "rgb(189, 189, 189)",
            borderRadius: "15px",
            padding: "1em 1em",
            textAlign: "center",
          }}>
          <h1 style={{ margin: "1em 0" }}>{info.name}</h1>
          <h4>Población: {info.population} habitantes</h4>
          <h4>Gravedad: {info.gravity}</h4>
          <h4>Periodo de rotación: {info.rotation_period} días</h4>
          <h4>Tipo de superficie: {info.terrain}</h4>
          <h4>Diámetro planetario: {info.diameter} kilómetros</h4>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} style={{ padding: "0 0.5em" }}>
          <Image
            style={{
              borderRadius: "15px",
              margin: "0 0.5em",
              width: "800px",
              height: "500px",
              objectFit: "cover",
            }}
            src={`/images/${info.name}.jpg` || `/images/${info.name}.jpeg`}
            fluid
            alt='Planet'
          />
        </Col>
      </Row>
    );
  }
}
