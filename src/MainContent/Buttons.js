import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import h from '../img/h.jpg';

function Buttons() {
    return (
        <div style={{ marginTop: "30px", marginLeft: "190px" }}>

            <Row>
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>9</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>10</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>11</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>12</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>1-8</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>IIT</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>NEET</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>ICSE</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>Govt.</b></Button>&nbsp;
                <Button variant="primary" style={{ width: "95px", height: "40px" }}><b>ENGG.</b></Button>&nbsp;
            </Row>

            

        </div>
    );
}

export default Buttons;
