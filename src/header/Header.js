import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './header.css'

function Header() {

    return (
        <div className="Container">
            <Row>
                <Col>
                    <span style={{ fontSize: "20px" }}><FaBars/></span>
                </Col>
                
                <Col xs lg="10">
                    <img src="img/logo.png" width="120px" height="30px"></img>
                </Col>
                <Col>
                    <span style={{ fontSize: "20px" }}><HiOutlineShoppingCart /></span>
                </Col>
            </Row>

            <div class="input-icons">
                <i class="fa fa-search icon"></i>
                <input class="input-field" placeholder="Search product" type="text"></input>
            </div>
        </div>


    );
}

export default Header;