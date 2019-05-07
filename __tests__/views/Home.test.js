
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
// make sure to import your connected component, not your react class
import ConnectedHome, {} from '../../app/views/Home';
import store from '../../app/store';


describe('ConnectedHomePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ConnectedHome />
        </Router>
      </Provider>,
    );
  });
  it('Should render component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
