import React from 'react';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store'
import Quiz from '../../app/components/screens/quiz';

const mockQuestion = [
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question: 'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
    correct_answer: 'True',
    incorrect_answers: [
      'False',
    ],
  },
];

describe('<Quiz/>', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it('Should contain a description', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper.find('h3')).toHaveLength(1);
  });
  it('Should have title', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper.contains(<h3> Your Score</h3>)).toBeTruthy();
  });
});
