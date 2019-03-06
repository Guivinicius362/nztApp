import React from 'react';
import { shallow } from 'enzyme';
import homeController from './homeController';
import homeView from './homeView';

describe('<homeView />', () => {
	const wrapper = shallow(<homeView />);

	expect(wrapper);
});

describe('<homeController />', () => {
	const wrapper = shallow(<homeController />);

	expect(wrapper);
});
