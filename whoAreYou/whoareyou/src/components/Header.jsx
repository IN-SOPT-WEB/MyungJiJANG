import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Title>두근두근 인물게임!</Title>
  )
}

const Title = styled.h1`
  color: #442e2e;
  text-align: center;
  font-size: 3rem;
  `;

export default Header