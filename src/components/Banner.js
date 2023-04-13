import { useState, useEffect } from "react";
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Cybersecurity trainee", "cloud Engineer trainee", "Pentester trainee"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(()=> {
      tick();
    }, delta)
    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenid@ a mi blog</span>
                <h1>{`Hola soy Saúl`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Pentester Trainee", "Cloud Engineer", "Cybersecurity Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Soy estudiante universitario de Programación y Transformación Digital. Tengo conocimientos en desarrollo web, tecnologías en la nube, pentesting y estoy aprendiendo ingeniería en ciberseguridad. Me apasiona la seguridad informática y busco constantemente oportunidades para crecer en este campo.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
