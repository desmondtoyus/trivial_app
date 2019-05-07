import axios from 'axios';
import {
  INPUT_CHANGE,
  RESET_REDUCER,
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_ERROR,
  MODAL_CHANGE,
  SAVE_CHOICE,
  UPDATE_CHOICE,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const handleSelect = ({ prop, value }) => (dispatch) => {
  dispatch({ type: INPUT_CHANGE, prop, value });
};

export const changeModal = ({ prop, value }) => (dispatch) => {
  dispatch({ type: MODAL_CHANGE, prop, value });
};

export const saveUserChoice = payload => (dispatch) => {
  dispatch({ type: SAVE_CHOICE, payload });
};

export const updateUserChoice = ({ prop }, payload) => (dispatch) => {
  dispatch({ type: UPDATE_CHOICE, prop, payload });
};

export const handleRestart = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};

export const fetchQuestions = data => (dispatch) => {
  axios.post('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', data)
    .then((response) => {
      dispatch({ type: FETCH_QUESTIONS, payload: response.data.results });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_QUESTIONS_ERROR });
    });
};
