import React, {useMemo, useState} from 'react';
import '../components/Select/select.css';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ItemType, Select} from '../components/Select/Select';

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

const CitiesInUkraineSecret = (props: {cities: Array<ItemType>}) => {
	console.log("Rendered CitiesInUkraineSecret")
	const [value, setValue] = useState('1')
	return (
		<>
			<div> Cities are in Ukraine </div>
			<Select value={value} onChange={setValue} items={props.cities}/>
		</>
	)
}

const CitiesInUkraine = React.memo(CitiesInUkraineSecret)

const CitiesHaveLetterMSecret = (props: {cities: Array<ItemType>}) => {
	console.log("Rendered CitiesHaveLetterM")
	const [value, setValue] = useState('1')
	return (
		<>
			<div> Cities start with the letter «M» </div>
			<Select value={value} onChange={setValue} items={props.cities}/>
		</>
	)
}
const CitiesHaveLetterM = React.memo(CitiesHaveLetterMSecret)

const CitiesHaveManyPeopleSecret = (props: {cities: Array<ItemType>}) => {
	console.log("Rendered CitiesHaveManyPeople")
	const [value, setValue] = useState('1')
	return (
		<>
			<div> Cities with more than 10 000 000 people </div>
			<Select value={value} onChange={setValue} items={props.cities}/>
		</>
	)
}

const CitiesHaveManyPeople = React.memo(CitiesHaveManyPeopleSecret)

export const HelpesExample = () => {
	console.log("Example")
	const [counter, setCounter] = useState(0)
	const changeCounter = () => setCounter(counter + 1)

	const allCities: Array<ItemType> = [
		{title: "Kyiv", value: "1", country: "Ukraine", people: 3000000},
		{title: "Kharkiv", value: "2", country: "Ukraine", people: 1400000},
		{title: "Cherngiov", value: "3", country: "Ukraine", people: 285821},
		{title: "Bucha", value: "4", country: "Ukraine", people: 28533},
		{title: "Irpin", value: "5", country: "Ukraine", people: 160084},
		{title: "Minsk", value: "6", country: "Belarus", people: 19000000},
		{title: "Moscow", value: "7", country: "Russia", people: 12000000},
		{title: "Istanbul", value: "8", country: "Russia", people: 15460000},
		{title: "Myshkin", value: "9", country: "Russia", people: 5647},
	]

	const [cities, setCities] = useState<Array<ItemType>>(allCities)

	const citiesInUkraine = useMemo(() => {
		return cities.filter(city => city.country === "Ukraine")
	}, [cities])

	const citiesHaveLetterM = useMemo(() => {
		return cities.filter(city => city.title[0] === "M")
	}, [cities])

	const citiesHaveManyPeople = useMemo(() => {
		return cities.filter(city => city.people && city.people > 10000000)
	}, [cities])

	return (
		<>
			<span>{counter}</span>
			<button onClick={changeCounter}>+</button>

			<ul>
				<li>
					<CitiesInUkraine cities={citiesInUkraine}></CitiesInUkraine>
				</li>
				<li>
					<CitiesHaveLetterM cities={citiesHaveLetterM}></CitiesHaveLetterM>
				</li>
				<li>
					<CitiesHaveManyPeople cities={citiesHaveManyPeople}></CitiesHaveManyPeople>
				</li>
			</ul>
		</>
	);
};