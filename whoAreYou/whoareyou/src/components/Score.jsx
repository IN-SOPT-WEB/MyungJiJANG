import React from 'react'
import styled from 'styled-components';

function Score(props) {
    const { score } = props; // 구조분해할당
    return (
        <ScoreText>{score}</ScoreText>
  )
}

const ScoreText = styled.h2`
  color: #442e2e;
  text-align: center;
  font-size: 5rem;
  `;

export default Score