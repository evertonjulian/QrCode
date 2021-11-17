import React from "react";
import { Row, Col, Card } from 'react-materialize';
import QRCode from "react-qr-code";

const Codigo = (props) => (
    <Card>
      <Row>
        <Col offset="m3" m={12}>
          <QRCode value={props.valor} />
        </Col>
      </Row>
    </Card>
);

export default Codigo;