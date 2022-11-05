import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {UncontrolledRating} from '../components/UncontrolledRating/UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledRating stories',
	component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const callback = action("rating changed inside components")

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({})
EmptyRating.args = {defaultValue: 0, onChange: callback}

export const Rating1 = Template.bind({})
Rating1.args = {defaultValue: 1, onChange: callback}

export const Rating2 = Template.bind({})
Rating2.args = {defaultValue: 2, onChange: callback}

export const Rating3 = Template.bind({})
Rating3.args = {defaultValue: 3, onChange: callback}

export const Rating4 = Template.bind({})
Rating4.args = {defaultValue: 4, onChange: callback}

export const Rating5 = Template.bind({})
Rating5.args = {defaultValue: 5, onChange: callback}