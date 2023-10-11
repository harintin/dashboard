<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  return (
    <GnbWrapper>
      <ul>
        <li>
          <Link to="/"> 홈 </Link>
        </li>
        <li>
          <Link to="/about"> 소개 </Link>
        </li>
      </ul>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.nav;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Gnb = () => {
    return (
        <GnbWrapper>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
        </GnbWrapper>
    );
};

const GnbWrapper = styled.nav`
    ul {
        display: flex;
        li {
            margin-left: 10px;
            a {
                color: #333;
                &:hover {
                    color: #000;
                }
            }
        }
    }
`;

export default Gnb;
>>>>>>> 8051ead1e56b3fb11bb1fbb2c6a3c2517f5230cb
