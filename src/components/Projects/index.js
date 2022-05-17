import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPaw } from "@fortawesome/free-solid-svg-icons";
//import { SlideFade } from "@chakra-ui/react";
//import LgScreenCarousel from '../LgScreenCarousel';

function Projects({ name }) {
  const [smShowDescription, toggleSmShowDescription] = useState(false)

  const [apps] = useState([
    {
      name: <>Loan Me a Home</>,
      Github: "https://github.com/dieres2010/loanMeAHome.git",
      appUrl: "https://loanmeahome.herokuapp.com/",
      index: 1,
    },
    {
      name: <>Git Pokemon</>,
      Github: "https://github.com/dieres2010/Pokemon-App.git",
      appUrl:"https://dieres2010.github.io/Pokemon-App/",
      index: 2,
    },
    {
      name: <>Budget Tracker</>,
      Github: "https://github.com/dieres2010/budget-tracker.git",
      appUrl:
        "https://ancient-journey-63025.herokuapp.com/",
      index: 3,
    },
    {
      name: <>Note Taker</>,
      Github: "https://github.com/dieres2010/note-taker.git",
      appUrl: "https://infinite-crag-03666.herokuapp.com/",
      index: 4,
    },
    {
      name: <>Coding-Quiz</>,
      Github: "https://github.com/dieres2010/coding-quiz.git",
      appUrl: "https://dieres2010.github.io/coding-quiz/",
      index: 5,
    },
    {
      name: <>Password Generator</>,
      Github: "https://github.com/dieres2010/passwd-generator.git",
      appUrl: "https://dieres2010.github.io/passwd-generator/",
      index: 5,
    },
  ]);

  return (
    <section>
      <ul>
        {apps.map((app, index) => (
          <li>
            <div>
              <Container>
                <Row className="justify-content-md-center">
                  <Col md="auto">
                    <h3>{app.name}</h3>
                    <a href={app.Github}>Github</a><br></br>
                    <a href={app.appUrl}>Live Application or Demo</a><br></br>
                    <img
                      src={require(`../../assets/img/apps/small/${index}.PNG`)}
                      style={{ width: "50%", height: "50%"}}
                      alt={app.name}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </li>
        ))}
      </ul>
    </section>

  );
}

export default Projects;
