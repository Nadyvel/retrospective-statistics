import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import StatsData from '../StatsData';
import { Provider } from 'react-redux';
import store from '../../store/index.jsx';

it('should render StatsData component', () => {
  const wrapper = shallow(<Provider store={store}><App /></Provider>);
  const statsdata = wrapper.find(<StatsData />);
  expect(statsdata.exists()).toBe(true);
});