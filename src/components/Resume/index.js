import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/../assets/Diego Restrepo's Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="my-5" >
    <h1 id="resume">Resume</h1>
    <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "150px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
      <br></br>
      <h1>Proeficiencies</h1>
      <p>
        React<br></br>
        NoSql<br></br>
        Node.js<br></br>
        Express.js<br></br>
        Mongoose<br></br>
        MongoDB<br></br>
        Mysql<br></br>
        APIs<br></br>
        Moment.js<br></br>
        Jquery<br></br>
        Javascript<br></br>
        CSS<br></br>
        HTML5<br></br>
        Oracle<br></br>
        Informix 4gl<br></br>
        Informix Online and SE Databases<br></br>
        SPL<br></br>
        Data Migration<br></br>              
      </p>
  </section>
  );
}

export default Resume;