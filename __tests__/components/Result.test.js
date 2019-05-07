import React from 'react';
import { shallow } from 'enzyme';

import Result from '../../app/components/screens/result';

describe('Component: Button', () => {
  const minProps = {
    text: '',
    size: '',
  };

  it('renders the component', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a button in size of "small" with text in it', () => {
    const wrapper = shallow(
      <Result {...minProps} size="small" text="Join us" />,
    );

    expect(wrapper.find(StyledButton).prop('size')).toBe('small');
    expect(wrapper.find(StyledButton).prop('text')).toBe('Join us');
  });
});
