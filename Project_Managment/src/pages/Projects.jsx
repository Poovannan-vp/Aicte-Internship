import MyNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { projects } from "../mock/dummyProjects";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => {
  return (
    <div>
      <MyNavbar />
      <Container fluid>
        <Row>
          <Col md={3}><Sidebar /></Col>
          <Col md={9}>
            <h2 className="mt-3">Projects</h2>
            <Row>
              {projects.map((project) => (
                <Col md={4} key={project.id}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
