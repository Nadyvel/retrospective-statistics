import React from 'react';
import { shallow } from "enzyme";
import StatsData from '../StatsData';

it('should render customer service phone number', () =>{
    const wrapper = shallow(<StatsData />);

    const p1 = wrapper.find('p.subtitle').text();
    expect(p1).toBe('Repository: {repositorySlug}');

    const p2 = wrapper.find('p.subtitle').text();
    expect(p1).toBe("{Moment(from).format('D MMM Y')} - {Moment(to).format('D MMM Y')}");

})