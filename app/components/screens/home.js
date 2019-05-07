import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from '../loader';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick =() => {
    const { handleChange, loadQuestions } = this.props;
    handleChange({ prop: 'loading', value: true });
    // handleChange({ prop: 'currentModal', value: 'quiz' });
    loadQuestions();
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="modal-dialog">

        <div className="modal-content">
          <div className="modal-header">
            <Link to="/"> <h3 className="heading"> Welcome to the Trivia Challenge</h3> </Link>
          </div>
          <div className="modal-body">
            {!loading ? (
              <div className="col-xs-3 col-xs-offset-5 caption">
             You Will be presented with 10 True or False Questions.
                <br />
                <p className="caption" style={{ marginTop: '20%' }}> You can score %100. </p>
              </div>
            ) : <Loader />}
          </div>
          <div className="modal-footer text-muted">
            <button
              className="label"
              id="qid"
              type="button"
              name="currentModal"
              onClick={this.handleClick}
            >Begin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  loadQuestions: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
