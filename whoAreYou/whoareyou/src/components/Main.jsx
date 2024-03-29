/** @format */

import React, { useState } from "react";
import { quizList } from "../constants/quizList";
import Score from "./Score";
import Replay from "./Replay";
import styled from "styled-components";
import Modal from "./Modal";
import ModalPortal from "../Portal";
import { useEffect } from "react";

function Main() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [content, setContent] = useState("");
  const handleModal = () => {
    setModalOn(false);
  };

  function checkAnswers(e) {
    setModalOn(true);
    if (e.target.innerText === quizList[currentIndex].answer) {
      setScore(score + 1);
      setContent("오또케 알아찌?? 정답입니다!!");
      if (score === 5) {
        setContent("축하합니다. 6문제 모두 맞추셨습니다!");
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      setContent("쌍둥인줄 알았는데 아니네요! 다시 선택해주세요!");
    }
  }

  function handleReplay() {
    setScore(0);
    setCurrentIndex(0);
  }
  useEffect(() => {
    console.log(modalOn);
  }, [modalOn]);
  return (
    <div>
      <Score score={score} />
      <ModalPortal>
        {modalOn && <Modal onClose={handleModal} content={content} />}
      </ModalPortal>

      {score <= 5 ? (
        <div>
          <QuizImg src={quizList[currentIndex].src} alt="퀴즈이미지" />
          <QuizContents onClick={checkAnswers}>
            {quizList[currentIndex].choices.map((choice) => (
              <AnswerBtn key={choice}>{choice}</AnswerBtn>
            ))}
          </QuizContents>
        </div>
      ) : (
        <>
          <div>게임이 끝났습니다!</div>
        </>
      )}
      <Replay handleReplay={handleReplay} />
    </div>
  );
}

const QuizImg = styled.img`
  width: 700px;
  height: 500px;
  overflow: hidden;
`;

const QuizContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  background-color: #442e2e;
  color: #fff;
  border: solid 5px #fef2f2;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: "Jua", sans-serif;
`;

export default Main;
