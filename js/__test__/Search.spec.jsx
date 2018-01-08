import React from 'react';
import renderer from 'react-test-renderer'; // eslint-disable-line
import Search from '../Search';

test('Search renders correctly', () => {
  const component = renderer.create(<Search />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
