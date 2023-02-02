/** @format */

import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, content }) => {
  return (
    <Background>
      <Content>
        <closeBtn onClick={onClose}>X</closeBtn>
        <ModalText>{content}</ModalText>
      </Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 300px;
  width: 500px;
  margin-top: 70px;
  position: relative;
  background-color: white;
  font-size: 2.1rem;
  box-shadow: 0 5px 16px black;
`;

const ModalText = styled.p`
  margin-top: 70px;
  margin-left: 50px;
  margin-right: 50px;
`;

const closeBtn = styled.button`
  margin-left: 50px;
`;
