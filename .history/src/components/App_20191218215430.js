import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Banner from './Banner';
import Resume from './Resume';
import ReactFullpage from '@fullpage/react-fullpage';

export default () => {

  return (
    <Container fluid="true" className="p-0">
      <ReactFullpage
        render={({state, fullpageApi}) => {
          return (
            <ReactFullpage.Wrapper>
              <Banner></Banner>
              <Resume></Resume>
            </ReactFullpage.Wrapper>
          );
        }} />
        
    </Container>
  );
}