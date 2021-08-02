import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

export default class Starship extends Component {
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
          <h4>Modelo: {info.model}</h4>
          <h4>Medida: {info.length} metros</h4>
          <h4>Tripulación (máx): {info.crew}</h4>
          <h4>Pasajeros (máx): {info.passengers}</h4>
          <h4>Costo en créditos: {info.cost_in_credits}</h4>
          <h4>Capacidad de consumibles: {info.consumables} </h4>
          <h4>Capacidad de carga: {info.cargo_capacity} toneladas</h4>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} style={{ padding: "0 0.5em" }}>
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
            alt='Planet'
          />
        </Col>
      </Row>
    );
  }
}
