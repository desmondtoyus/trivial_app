import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  changeModal,
  saveUserChoice,
  updateUserChoice,
  fetchQuestions,
  handleRestart,
} from '../redux/actions/shared.action';
import ScreenManager from '../components/screens/screen.manager';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const {
      questions, answers, currentModal, dispatchFetchQuestions, dispatchHandleRestart, score,
      dispatchChangeModal, dispatchSaveUserChoice, dispatchUpdateUserChoice, currentQuestion, loading,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Home </title>
          <meta name="description" content="Trivia Game Coding Challenge" />
        </Helmet>
        <ScreenManager
          currentModal={currentModal}
          handleChange={dispatchChangeModal}
          loading={loading}
          loadQuestions={dispatchFetchQuestions}
          answers={answers}
          questions={questions}
          saveAnswer={dispatchSaveUserChoice}
          answersUpdate={dispatchUpdateUserChoice}
          currentQuestion={currentQuestion}
          restartQuiz={dispatchHandleRestart}
          score={score}
        />
      </div>
    );
  }
}

Home.propTypes = {
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
  currentQuestion: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  currentModal: PropTypes.string,
  loading: PropTypes.bool,
  dispatchFetchQuestions: PropTypes.func.isRequired,
  dispatchChangeModal: PropTypes.func.isRequired,
  dispatchHandleRestart: PropTypes.func.isRequired,
  dispatchSaveUserChoice: PropTypes.func.isRequired,
  dispatchUpdateUserChoice: PropTypes.func.isRequired,
};

Home.defaultProps = {
  currentModal: 'start',
  loading: false,
  answers: [],
  questions: [],
};


const mapStateToProps = (state) => {
  const {
    questions,
    answers,
    err,
    loading,
    description,
    currentQuestion,
    currentModal,
    score,
  } = state.shared;
  return {
    questions,
    answers,
    loading,
    err,
    currentModal,
    currentQuestion,
    description,
    score,
  };
};


export const mapDispatchToProps = dispatch => ({
  dispatchChangeModal: ({ prop, value }) => dispatch(changeModal({ prop, value })),
  dispatchFetchQuestions: payload => dispatch(fetchQuestions(payload)),
  dispatchHandleRestart: evt => dispatch(handleRestart(evt)),
  dispatchSaveUserChoice: payload => dispatch(saveUserChoice(payload)),
  dispatchUpdateUserChoice: payload => dispatch(updateUserChoice(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
