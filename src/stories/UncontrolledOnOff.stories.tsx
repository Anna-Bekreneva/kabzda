import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UncontrolledOnOff from '../components/UncontrolledOnOff/UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledOnOff',
	component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

const callback = action("on or off clicked")

export const OnMode = Template.bind({})
OnMode.args = {defaultOn: true, onChange: callback}

export const OffMode = Template.bind({})
OffMode.args = {defaultOn: false, onChange: callback}
