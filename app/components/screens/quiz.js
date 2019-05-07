import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSave =(event) => {
    event.preventDefault();
    const {
      saveAnswer,
      currentQuestion,
    } = this.props;
    const payload = {
      currentQuestion,
      answer: event.target.value === 'True' ? 'True' : 'False',
    };
    saveAnswer(payload);
  }

  render() {
    const {
      currentQuestion,
      question,
    } = this.props;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3> {question.category}</h3>
          </div>
          <div className="modal-body">
            <div className="col-xs-3 col-xs-offset-5">
              {question.question}
            </div>
            {/* Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.
          Coding for the keyboard is important for users with physical disabilities who cannot use a mouse,
           AT compatibility, and screenreader users. */}
            <div className="choices">
              <button className="element-animation1 btn btn-lg btn-primary btn-block options" name="true_answer" value="True" onClick={this.handleSave} onKeyDown={this.handleSave} type="button" tabIndex={0}>True</button>
              <button className="element-animation1 btn btn-lg btn-primary btn-block options" name="false_answer" value="False" onClick={this.handleSave} onKeyDown={this.handleSave} type="button" tabIndex={-1}>False</button>
            </div>
          </div>
          <div className="modal-footer text-muted">
            <span className="label label-warning" id="qid">{currentQuestion} of 10</span>
          </div>
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    choice: PropTypes.string.isRequired,
  }),
  // answersUpdate: PropTypes.func.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};
Quiz.defaultProps = {
  answer: null,
};

export default Quiz;
