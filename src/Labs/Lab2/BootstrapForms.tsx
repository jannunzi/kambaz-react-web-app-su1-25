import { Row, Form, Col, Button } from "react-bootstrap";

export default function BootstrapForms() {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" id="username" placeholder="alice" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              id="password"
              placeholder="!@#$QWERzxc"
            />
          </Col>
        </Form.Group>
        <Button type="button" variant="primary" block>
          Sign in
        </Button>
      </Form>
      <hr />
    </div>
  );
}
