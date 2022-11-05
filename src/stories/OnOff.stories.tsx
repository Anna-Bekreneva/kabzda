import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {OnOff} from '../components/OnOff/OnOff';
import {action} from '@storybook/addon-actions';

export default {
	title: 'OnOff',
	component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

const callback = action("on or off clicked")

export const OnMode = Template.bind({})
OnMode.args = {onChange: callback, on: true}

export const OffMode = Template.bind({})
OffMode.args = {onChange: callback, on: false}

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true);
	return <OnOff on={value} onChange={setValue}/>
}