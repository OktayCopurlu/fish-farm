import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Tbody from "./thead";
import Thead from "./tbody";

export default function Write(props) {
  return (
    <Table striped bordered hover>
      {Tbody(props)}

      {Thead(props)}
    </Table>
  );
}
