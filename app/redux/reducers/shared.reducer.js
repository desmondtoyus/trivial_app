import {
  INPUT_CHANGE,
  RESET_REDUCER,
  FETCH_QUESTIONS,
  MODAL_CHANGE,
  SAVE_CHOICE,
  UPDATE_CHOICE,
  FETCH_QUESTIONS_ERROR,

} from '../actions/types';

const INITIAL_STATE = {
  questions: [],
  answers: [],
  err: false,
  description: '',
  status: 'start',
  currentModal: 'start',
  currentQuestion: 1,
  loading: false,
  score: 0,
};

function updateChoice(data) {
  const updatedContents = [];
  data.map((value) => {
    if (value.id !== data.id) {
      updatedContents.push(value);
    }
    return updatedContents;
  });

  return [...updatedContents, ...data];
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MODAL_CHANGE:
      return {
        ...state, [action.prop]: action.value,
      };
    case INPUT_CHANGE:
      return {
        ...state, [action.prop]: action.value,
      };
    case FETCH_QUESTIONS:
      return {
        ...state, questions: action.payload, loading: false, currentModal: 'quiz',
      };
    case SAVE_CHOICE:
      if (action.payload.currentQuestion === 10) {
        return {
          ...state, answers: [...state.answers, action.payload], currentModal: 'result',
        };
      }
      return {
        ...state, answers: [...state.answers, action.payload], currentQuestion: action.payload.currentQuestion + 1,
      };


    case UPDATE_CHOICE:
      return {
        ...state, answers: updateChoice(action.payload),
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state, err: true,
      };
    case RESET_REDUCER:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
