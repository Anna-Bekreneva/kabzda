import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from '../components/Rating/Rating';
import {action} from '@storybook/addon-actions';

export default {
	title: 'Rating stories',
	component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

const click = action('change')

export const EmptyRating = Template.bind({})
EmptyRating.args = {value: 0, onClick: click}

export const Rating1 = Template.bind({})
Rating1.args = {value: 1, onClick: click}

export const Rating2 = Template.bind({})
Rating2.args = {value: 2, onClick: click}

export const Rating3 = Template.bind({})
Rating3.args = {value: 3, onClick: click}

export const Rating4 = Template.bind({})
Rating4.args = {value: 4, onClick: click}

export const Rating5 = Template.bind({})
Rating5.args = {value: 5, onClick: click}

export const RatingChanging = () => {
	const [rating, setRating] = useState<RatingValueType>(3);
	return <Rating value={rating} onClick={setRating}/>
}