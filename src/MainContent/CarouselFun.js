import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carasoul.css';
import f from '../img/f.png';
import o1 from '../img/o1.jpg';

function CarouselFun() {
  return (
    <>
      <Carousel style={{  marginTop: "20px"}}>
  

        <Carousel.Item>
          <img
            src={o1}
            alt="First slide"
            class="img"
          >
            </img>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={f}
            alt="First slide"
            class="img"
          ></img>
        </Carousel.Item>

        
        
      </Carousel>
    </>
  );
}

export default CarouselFun;
