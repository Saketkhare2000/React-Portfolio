import {motion} from 'framer-motion';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const {pathname} = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '30%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/work' ? '30%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{width: '0%'}}
            animate={{width: pathname === '/contact' ? '30%' : '0%'}}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 99;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      padding: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.125rem;
  background: #23d997;
  width: 0%;
  bottom: -60%;
  position: absolute;
  @media (max-width: 900px) {
    width: '90%';
  }
`;

export default Nav;
