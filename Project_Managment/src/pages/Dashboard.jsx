import MyNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { projects } from "../mock/dummyProjects";
import { tasks } from "../mock/dummyTasks";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/CustomStyles.css";


const Dashboard = () => {
  return (
    <div>
      <MyNavbar />
      <Container fluid class="dashboard">
        <Row>
          <Col md={3}><Sidebar /></Col>
          <Col md={9}>
            <h2 className="mt-3">Dashboard</h2>
            
            <h4>Projects</h4>
            <Row>
              {projects.map((project) => (
                <Col md={4} key={project.id}>
                  <Card className="mb-5">
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <h4>Tasks</h4>
            <ul className="list-group">
              {tasks.map((task) => (
                <li key={task.id} className="list-group-item">
                  {task.name} - {task.status}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
