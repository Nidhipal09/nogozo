import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import './Novels.css'
import p1 from '../img/1.jpeg';
import p2 from '../img/2.jpeg';
import p3 from '../img/3.jpeg';
import s from '../img/s.jpeg';
import h from '../img/h.jpg';

function Novels() {
    return (
        <>
            <div style={{ marginTop: "20px", marginLeft: "26px" }}>
                
            <Row xs={1} md={6} className="g-4">
                <Col>
                    <Card style={{ width: '200px', border: 'none' }} >
                    <img class="imgnfu" src={p1} height="250px" ></img>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '200px', border: 'none' }} >
                    <img class="imgnfu" src={p2} height="250px" ></img>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '200px', border: 'none' }} >
                    <img class="imgnfu" src={p3} height="250px" ></img>
                    </Card>
                </Col>
            </Row>
                
            </div>

            <h3 style={{ marginTop: "20px", marginLeft: "26px" , textAlign: "left"}}>Novels for you</h3>
            <div style={{ marginTop: "20px", marginLeft: "26px" }}>
                
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card style={{ width: '280px', border: 'none' }} >
                    <img class="imgnfu" src={s} height="140px"></img>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '280px', border: 'none' }} >
                    <img class="imgnfu" src={s} height="140px"></img>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '280px', border: 'none' }} >
                    <img class="imgnfu" src={s} height="140px"></img>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '280px', border: 'none' }} >
                    <img class="imgnfu" src={s} height="140px"></img>
                    </Card>
                </Col>
            </Row>
                
            </div>

            <h3 style={{ marginTop: "20px", marginLeft: "26px" , textAlign: "left"}}>Featured Novels</h3>
            <div style={{ marginTop: "20px", marginLeft: "26px" }}>
                
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                
            </Row>
                
            </div>

            <h3 style={{  marginLeft: "20px" ,marginLeft: "26px", textAlign: "left"}}>Term 1 Exams 2021</h3>
            <div style={{ marginTop: "20px", marginLeft: "26px" }}>
                
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                
            </Row>
                
            </div>
            
            <h3 style={{  marginLeft: "20px" ,marginLeft: "26px", textAlign: "left"}}>ISC Board Best Picks</h3>
            <div style={{ marginTop: "20px", marginLeft: "26px" }}>
                
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={{ width: '18rem', border: 'none'}} >
                        <div style={{backgroundColor: "#ebebe0", paddingLeft: "30px",paddingRight: "30px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "15px"}}><Card.Img variant="top" src={h} width="50px" height="200px" /></div>
                        <Card.Body>
                            <Card.Title>Harry potter</Card.Title>
                            <Card.Text style={{color : "blue", fontWeight: "bold"}}>₹275&nbsp;&nbsp;
                                <span style={{color : "grey", fontWeight: "bold", textDecoration: "line-through"}}>₹550</span><br/>
                                <span style={{color : "green", fontWeight: "bold"}}>50.0% off</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                
            </Row>
                
            </div>


        </>
    );
}

export default Novels;
