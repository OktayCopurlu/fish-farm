/*
  Programın ekte verilen data yı useState kullanarak ekrana yazdırması hedeflenmektedir.
  -Programda react-bootstrap Table kullanıldı.
  -Tbody ve Thead olarak 2 adet tablo componenti mevcut.
*/

import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";//Bootstrap Table importu
import Tbody from "./thead";
import Thead from "./tbody";

export default function Write(props) {
  return (//bootstrap Table 
    <Table striped bordered hover> 
      {Tbody(props)}
      {Thead(props)}
    </Table>
  );
}
