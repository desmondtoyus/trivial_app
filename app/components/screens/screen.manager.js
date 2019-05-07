import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './quiz';
import Home from './home';
import Result from './result';


const ScreenManager = (props) => {
  switch (props.currentModal) {
    case 'quiz':
      return <Quiz handleChange={props.handleChange} loading={props.loading} question={props.questions[props.currentQuestion - 1]} answers={props.answer} saveAnswer={props.saveAnswer} answersUpdate={props.answersUpdate} currentQuestion={props.currentQuestion} />;
    case 'start':
      return <Home handleChange={props.handleChange} loading={props.loading} loadQuestions={props.loadQuestions} />;
    case 'result':
      return <Result score={props.score} handleChange={props.handleChange} loading={props.loading} restartQuiz={props.restartQuiz} questions={props.questions} answers={props.answers} dispatchHandleRestart={props.restartQuiz} />;
    default:
      return null;
  }
};


ScreenManager.propTypes = {
  currentModal: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }),
  answer: PropTypes.shape({
    question: PropTypes.string,
    choice: PropTypes.string,
  }),
  questions: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  })),
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    choice: PropTypes.string,
  })),
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  restartQuiz: PropTypes.func,
  answersUpdate: PropTypes.func,
  saveAnswer: PropTypes.func,
  loadQuestions: PropTypes.func.isRequired,
};

ScreenManager.defaultProps = {
  question: {},
  answer: {},
  questions: [],
  answers: [],
  loading: false,
  restartQuiz: null,
  answersUpdate: null,
  saveAnswer: null,
};

export default ScreenManager;
