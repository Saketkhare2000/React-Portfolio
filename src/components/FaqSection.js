import React, {useState} from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';

import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';
function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      initial="hidden"
      ref={element}
      animate={controls}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, illo!
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, illo!
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Paying methods">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, illo!
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, illo!
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
