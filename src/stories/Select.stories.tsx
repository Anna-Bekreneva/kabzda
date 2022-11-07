import React from "react";

import {ComponentMeta} from '@storybook/react';
import {Select} from '../components/Select/Select';

export default {
	title: 'select',
	component: Select
} as ComponentMeta<typeof Select>;

export const SelectBase = () => {
	const items = [
		{title: 'Anna', value: 1}, {title: 'Anka', value: 1}
	]

	return (
		<div>
            <div>{}</div>
			{items.map((i => <div>{i.title}</div>))}
        </div>
	)
}