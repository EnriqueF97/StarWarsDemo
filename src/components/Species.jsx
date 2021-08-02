import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

export default class Species extends Component {
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
          padding: "0.5em 1em",
          margin: 0,
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
            margin: "0.5em 0",
          }}>
          <h1 style={{ margin: "1em 0" }}>{info.name}</h1>
          <h4>Clasificación: {info.classification}</h4>
          <h4>Designación: {info.designation}</h4>
          <h4>Altura promedio (cm): {info.average_height}</h4>
          <h4>Longevidad: {info.average_lifespan}</h4>
          <h4>Lengua nativa: {info.language}</h4>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} style={{ padding: "0 0.5em", margin: "0.5em 0" }}>
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
