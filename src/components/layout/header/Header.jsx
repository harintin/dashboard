<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// function Header() {}
const Header = () => {
  return (
    <HeaderWrapper>
      <h1>header</h1>
    </HeaderWrapper>
  );
};

// const 변수명 = styled.태그명``;
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #eee;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Gnb from './Gnb';

// function Header() {}
const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>
                <Link to="/">logo</Link>
            </Logo>
            <Gnb />
        </HeaderWrapper>
    );
};

// const 변수명 = styled.태그명``;
const Logo = styled.h1`
    font-size: 30px;
    color: mintcream;
`;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px;
    background-color: #eee;
>>>>>>> 8051ead1e56b3fb11bb1fbb2c6a3c2517f5230cb
`;

export default Header;
