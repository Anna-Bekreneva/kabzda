import React, {useState} from 'react';
import '../components/Select/select.css';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from '../components/Select/Select';

export default {
	title: 'select',
	component: Select
} as ComponentMeta<typeof Select>;

export const WithValue = () => {

	const [value, setValue] = useState('2')

	return (
		<Select value={value} onChange={setValue} items={[
			{value: '1', title: 'Minsk'},
			{value: '2', title: 'Moscow'},
			{value: '3', title: 'Kiev'}
		]}/>
	);
};

export const WithoutValue = () => {

	const [value, setValue] = useState(null)

	return (
		<Select value={value} onChange={setValue} items={[
			{value: '1', title: 'Minsk'},
			{value: '2', title: 'Moscow'},
			{value: '3', title: 'Kiev'}
		]}/>
	);
};