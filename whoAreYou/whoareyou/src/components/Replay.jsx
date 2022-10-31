import React from 'react'
import styled from 'styled-components';

function Replay(props) {
    const { handleReplay } = props; // 구조분해할당
  return (
    <ReplayBtn onClick={handleReplay}>다시하기</ReplayBtn>
  )
}

const ReplayBtn = styled.button`
    text-align: center;
    width: 700px;
    height: 100px;
    font-size: 2rem;
    background-color: #7aa1d4;
    color: #2b2b2b;
    border: solid 5px #fef2f2;
    font-family: 'Jua', sans-serif;
`
export default Replay