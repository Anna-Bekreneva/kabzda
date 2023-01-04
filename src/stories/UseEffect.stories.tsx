import React, {useEffect, useState} from 'react';

export default {
	title: 'useEffect demo'
}

export const SimpleExample = () => {
	const [fake, setFake] = useState(1)
	const [counter, setCounter] = useState(1)

	console.log('SimpleExample')

	useEffect(() => {
		console.log('useEffect first render and every render')
		document.title = counter.toString()
	})

	useEffect(() => {
		console.log('UseEffect only first render (componentDidMount)')
		document.title = counter.toString()
	}, [])

	useEffect(() => {
		console.log('UseEffect first render and every counter change')
		document.title = counter.toString()
	}, [counter])

	return (
		<>
			Hello, {counter} {fake}
			<button onClick={() => setFake(fake + 1)}>fake +</button>
			<button onClick={() => setCounter(counter + 1)}>counter +</button>
		</>
	)
}

export const SetTimeoutExample = () => {
	const [fake, setFake] = useState(1)
	const [counter, setCounter] = useState(1)

	console.log('SetTimeoutExample')

	useEffect(() => {
		setInterval(() => {
			console.log("tick: " + counter)
			setCounter((state) => state + 1)
		}, 1000)
	}, [])

	return (
		<>
			Hello, counter : {counter} — fake: {fake}
			{/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
			{/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
		</>
	)
}

export const SimpleClockExample = () => {
	const [date, setDate] = useState(getTime)
	console.log('SimpleClockExample')
	useEffect(() => {
		setInterval(() => {
			setDate(getTime())
		}, 1000)
	}, [])

	function getTime(){
		let date = new Date(),
			hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
			minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
			seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
		return {hours, minutes, seconds}
	}

	return (
		<>
			{date.hours + ':' + date.minutes + ':' + date.seconds}
		</>
	)
}


