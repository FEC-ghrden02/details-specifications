import React from 'react';
import ConvenienceListItem from '../components/ConvenienceListItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ConvenienceListItem key="one_touch_down_wnds">1-touch down</ConvenienceListItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});