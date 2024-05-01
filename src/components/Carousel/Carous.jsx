import Carousel from 'react-bootstrap/Carousel';
import Hierbas1 from '../../assets/img/hierbas_1.jpg';
import Hierbas2 from '../../assets/img/hierbas_2.jpg';
import Hierbas3 from '../../assets/img/hierbas_3.jpg';

function Carous() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Hierbas1} alt="First slide" />
        <Carousel.Caption>
          <h3>Hierbas Medicinales</h3>
          <p>Los básicos para el bienestar en el hogar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hierbas2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Hierbas Aromáticas</h3>
          <p>Aprende a conservar tus hierbas en casa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hierbas3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Recetas</h3>
          <p>
            Aprende a preparar tus propios hungüentos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;
