import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <div id="wd-bs-responsive-grids">
          <h2>Responsive grid system</h2>
          <Row>
            <Col xs="12" md="6" xl="3" className="bg-warning">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur iure. Incidunt voluptatum aspernatur aliquam?
              Inventore tenetur assumenda rem possimus dolorem porro totam,
              harum quae delectus eaque odio, minima facere!
            </Col>
            <Col xs="12" md="6" xl="3" className="bg-primary text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur iure. Incidunt voluptatum aspernatur aliquam?
              Inventore tenetur assumenda rem possimus dolorem porro totam,
              harum quae delectus eaque odio, minima facere!
            </Col>
            <Col xs="12" md="6" xl="3" className="bg-danger text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur iure. Incidunt voluptatum aspernatur aliquam?
              Inventore tenetur assumenda rem possimus dolorem porro totam,
              harum quae delectus eaque odio, minima facere!
            </Col>
            <Col xs="12" md="6" xl="3" className="bg-success text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur iure. Incidunt voluptatum aspernatur aliquam?
              Inventore tenetur assumenda rem possimus dolorem porro totam,
              harum quae delectus eaque odio, minima facere!
            </Col>
          </Row>
        </div>
        <hr />
        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
          </Col>
          <Col className="bg-primary text-white">
            <h3>Right half</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="bg-warning">
            <h3>One thirds</h3>
          </Col>
          <Col xs="8" className="bg-success text-white">
            <h3>Two thirds</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="4" xxl="9" className="bg-warning">
            <h3>One thirds</h3>
          </Col>
          <Col lg="8" xxl="4" className="bg-success text-white">
            <h3>Two thirds</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="2" className="bg-dark text-white">
            <h3>Sidebar</h3>
          </Col>
          <Col xs="8">
            <h3>Main content</h3>
          </Col>
          <Col xs="2" className="bg-info">
            <h3>Sidebar</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}
