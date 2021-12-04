import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carasoul.css';

function CarouselFun() {
  return (
    <>
      <Carousel style={{  marginTop: "20px"}}>


        <Carousel.Item>
          <img
            src="/img/c3.png"
            alt="First slide"
            class="img"
          >
            </img>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/c4.png"
            alt="First slide"
            class="img"
          ></img>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/c7.jpg"
            alt="First slide"
            class="img"
          ></img>
        </Carousel.Item>
        
      </Carousel>
    </>
  );
}

export default CarouselFun;
