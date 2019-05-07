import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Questions from './questions';
import Home from '../../app/components/screens/home';

jest.mock('axios');

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

describe('Home screen', () => {
  test('renders correctly the Home screen', () => {
    const wrapper = shallow(<Home handleChange={null} loadQuestions={null} loading={false} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should have page title', () => {
    const wrapper = shallow(<Home handleChange={null} loadQuestions={null} loading={false} />);
    expect(wrapper.find('.heading').text()).toBe('Welcome to the Trivia Challenge');
  });

  test('should fetch Questions', () => {
    const resp = { data: mockQuestion };
    axios.get.mockResolvedValue(resp);

    // or depending on use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Questions.all().then(() => expect(resp.data).toEqual(mockQuestion));
  });
});
