import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Accordion, AccordionPropsType} from '../components/Accordion/Accordion';
import {action} from '@storybook/addon-actions';

const CategoryObj = (categoryName: 'Color' | 'Event') => ({
	table: {
		categoryName: categoryName
	}
})
export default {
	title: 'Accordion',
	component: Accordion,
	argTypes: {
		color: {
			control: 'color',
			...CategoryObj('Color')
		},

		onChange: {
			...CategoryObj('Event')
		}
	}
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change event fired")
const onClickCallback = action('some item was clicked')
const callbacksProps = {
	onChange: callback,
	onClick: onClickCallback
}

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
	...callbacksProps,
	titleValue: "Menu",
	collapsed: true,
	items: [],
	onClick: onClickCallback
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
	...callbacksProps,
	titleValue: "Users",
	collapsed: false,
	items: [{title: 'Anna', value: 1}, {title: 'Anka', value: 1}],
	onClick: onClickCallback
}

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true);
	return <Accordion
		titleValue={"Users"}
		collapsed={value}
		onChange={() => setValue(!value)}
		items={[{title: 'Anna', value: 1}, {title: 'Anka', value: 2}]}
		onClick={onClickCallback}
	/>
}