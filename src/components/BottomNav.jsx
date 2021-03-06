import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class BottomNav extends Component {
  render() {
    return (
      <Row style={{ minHeight: "4cm", background: "rgb(33, 38, 48)", padding: "2em 15vw" }}>
        <Col style={{ textAlign: "left" }}>
          <h4 style={{ color: "rgb(191, 191, 191)", fontFamily: "sans-serif" }}>Enrique Favila Martínez</h4>
          <h6 style={{ color: "rgb(191, 191, 191)", fontFamily: "sans-serif" }}>01 de Agosto de 2021.</h6>

          <a
            style={{ color: "rgb(191, 191, 191)", fontFamily: "sans-serif" }}
            href='https://github.com/EnriqueF97/StarWarsDemo'>
            <h6 style={{ color: "rgb(191, 191, 191)", fontFamily: "sans-serif" }}>EnriqueF97@github</h6>
          </a>
        </Col>
      </Row>
    );
  }
}
