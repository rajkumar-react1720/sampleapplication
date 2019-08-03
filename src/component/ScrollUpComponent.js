import React from 'react';
import styled from 'styled-components';



export default class ScrollButton extends React.Component {
    constructor() {
      super();

      this.state = {
          intervalId: 0
      };
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }

    render () {

      const Button = styled.button`
        border: 1px solid #e0e0e0;
        height: 50px;
        width: 100px;
        cursor: pointer;
        float: right;
        margin-bottom: 20px;
      `;
        return <Button
                 onClick={ () => { this.scrollToTop(); }}>
                  <h3>Scroll Top</h3>
                </Button>;
     }
  } 

