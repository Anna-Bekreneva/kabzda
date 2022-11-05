import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UncontrolledOnOff from '../components/UncontrolledOnOff/UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
	title: 'input'
};

export const UncontrolledInput = () => {
	return <input type="text"/>;
};

export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('');

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const actualValue = event.currentTarget.value;
		setValue(actualValue);
	}

	return (
		<div>
			<input onChange={onChange} type="text"/>
			{value}
		</div>
	)
}

export const GetValueOfUncontrolledInputByButtonPreses = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const save = () => {
		const el = inputRef.current as HTMLInputElement
		setValue(el.value)
	}

	return (
		<div>
			<input type="text" ref={inputRef}/>
			<button onClick={save}>save</button> -actual value: {value}
		</div>
	)
}

export const ControlledInputWithFixedValue = () => <input type="text" value={'it-incubator.by'}/>
