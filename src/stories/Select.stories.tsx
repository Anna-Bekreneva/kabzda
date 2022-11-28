import React, {useState} from 'react';
import '../components/Select/select.css';

import {ComponentMeta} from '@storybook/react';
import {Select} from '../components/Select/Select';

export default {
	title: 'select',
	component: Select
} as ComponentMeta<typeof Select>;

export const SelectBase = () => {
	const items = [
		{title: 'PC', value: 1},
		{title: 'Table', value: 2},
		{title: 'Phone', value: 3},
		{title: 'Notebook', value: 4}
	];

	const [value, setValue] = useState<string>('Choose a device');
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const onClickHandler = () => setIsOpen(!isOpen)

	const test = (title: string) => () => {
		setValue(title);
		onClickHandler()
	}

	return (
		<div className="select">
            <div onClick={onClickHandler}>{value}</div>
			<div className={isOpen ? "select__box select__box--open" : "select__box"}>
				{items.map(( i => <div onClick={test(i.title)}>{i.title}</div> ))}
			</div>
        </div>
	);
};