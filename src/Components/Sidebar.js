import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <Container id="sidebar-section">
      <Row xl={2} lg={2} md={1}>
        <Col>sidebar</Col>
        <Col>sidebar</Col>
        <Col>sidebar</Col>
      </Row>
    </Container>
  );
};
