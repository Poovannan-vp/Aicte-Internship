import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/CustomStyles.css";

const Sidebar = () => {
  return (
    <div className="custom-sidebar">
      <h4 className="sidebar-title">Projects</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/projects" className="sidebar-link">All Projects</Nav.Link>
        <Nav.Link as={Link} to="/tasks" className="sidebar-link">Tasks</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

