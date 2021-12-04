import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carasoul.css';
import c3 from '../img/c3.png';
import c4 from '../img/c4.png';
import c7 from '../img/c7.jpg';

function CarouselFun() {
  return (
    <>
      <Carousel style={{  marginTop: "20px"}}>


        <Carousel.Item>
          <img
            src={c3}
            alt="First slide"
            class="img"
          >
            </img>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={c4}
            alt="First slide"
            class="img"
          ></img>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={c7}
            alt="First slide"
            class="img"
          ></img>
        </Carousel.Item>
        
      </Carousel>
    </>
  );
}

export default CarouselFun;
