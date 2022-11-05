import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {UncontrolledAccordion} from '../components/UncontrolledAccordion/UncontrolledAccordion';
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledAccordion',
	component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action("accordion mode change event fired")

export const ModeChanging = () => <UncontrolledAccordion titleValue={"Menu"}></UncontrolledAccordion>