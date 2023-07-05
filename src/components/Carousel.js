import Carousel from 'react-bootstrap/Carousel';
import Pizza1 from '../images/pizza1.jpg';
import Pizza2 from '../images/pizza2.jpg';
import Pizza3 from '../images/pizza3.jpg';
import Lateral from './Lateral';

const Carrusel= () => {
  return (

    <div id='carrusel'>

      <div id='ilustracion'>

    <Carousel className='carouselExampleCaptions'>
      
      <Carousel.Item>
        <img className="image-carrusel" src={Pizza1} alt="First slide"/>
        <Carousel.Caption>
          <h5>Una gran variedad de pizzas</h5>
          <p>Donde no podras pedir solo una</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="image-carrusel" src={Pizza2} alt="Second slide"/>
        <Carousel.Caption>
        <h5>Una gran variedad de pizzas</h5>
        <p>Donde no podras pedir solo una</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="image-carrusel" src={Pizza3} alt="Third slide"/>
        <Carousel.Caption>
          <h5>Una gran variedad de pizzas</h5>
          <p>Donde no podras pedir solo una</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    </div>

<Lateral/>

</div>


  );
}

export default Carrusel;