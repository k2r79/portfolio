import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { slideInLeft, slideInUp, slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ReactSnapScroll from 'react-snap-scroll';
import './App.scss';
import Skill from '../Skill';
import Portrait from './portrait.png';
import Devops from './devops.png';

function App() {
  const styles = {
    slideInLeft: {
      animation: 'slideInLeft 3s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInDown: {
      animation: 'slideInDown 3s',
      animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
    slideInUp: {
      animation: 'slideInUp 3s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
  };

  return (
    <Container fluid="true" className="p-0">
      <ReactSnapScroll transition="move-top-bottom">
        <Row className="banner mb-5">
          <StyleRoot id="banner-portrait-container">
            <img alt="Portrait" src={Portrait} style={styles.slideInLeft} /> 
          </StyleRoot>
          <div id="banner-text" className="my-auto-lg">
            <div>
              <StyleRoot>
                <h1 style={styles.slideInDown}>Vincent Kelleher</h1>
              </StyleRoot>
              <StyleRoot>
                <h2 style={styles.slideInUp}>Leader Technique Fullstack</h2>
              </StyleRoot>
            </div>
          </div>
        </Row>
      </ReactSnapScroll>
    </Container>
  );
}

export default App;
