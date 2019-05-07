import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';


class Result extends Component {
  handleClick = () => {
    const { dispatchHandleRestart, handleChange } = this.props;
    handleChange({ prop: 'loading', value: true });
    setTimeout(() => {
      dispatchHandleRestart();
    }, 3000);
  };

  renderQuestionsAndAnswers =() => {
    const { questions, answers, handleChange } = this.props;
    const arr = [];
    let correct = 0;
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < questions.length; index++) {
      const answer = { choice: `${answers[index].answer}` };
      const element = { ...questions[index], ...answer };
      arr.push(element);
      if (answers[index].answer === questions[index].correct_answer) {
        correct += 1;
      }
    }
    handleChange({ prop: 'score', value: correct });
    // this.setState({ correct });
    return arr.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li className="list-group-item px-0" key={index}>
        <a className="btn collapsed" data-toggle="collapse" href={`#collapseQuestion${index}`} role="button" aria-expanded="true" aria-controls={`#collapseQuestion${index}`}>
          {item.question}<span className="mr-3" />
        </a>
        <div className="collapse" id={`collapseQuestion${index}`}>
          <div className="card card-body mt-2">
            <p>{`Correct Answer: ${item.correct_answer}`}</p>
            <p style={{ color: item.correct_answer !== item.choice ? 'red' : 'blue' }}>{`Your Choice: ${item.choice}`} {item.correct_answer !== item.choice ? <span> &#10007;</span> : <span> &#10003; </span>}</p>
          </div>
        </div>
      </li>
    ));
  }

  render() {
    const { loading, questions, score } = this.props;
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3> Your Score</h3>
            <h5> {`${score} / ${questions.length}`} </h5>
          </div>
          <div className="modal-body">
            {!loading ? (
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="my-5">
                      <ul className="list-group list-group-flush">
                        {this.renderQuestionsAndAnswers()}
                      </ul>
                      <span onClick={this.handleClick} tabIndex={0} onKeyDown={this.handleClick} role="button" className="caption"> <h5>PLAY AGAIN?</h5> </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : <Loader />}
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    choice: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  dispatchHandleRestart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Result;
