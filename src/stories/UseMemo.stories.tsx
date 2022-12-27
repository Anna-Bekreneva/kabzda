import React, {useCallback, useMemo, useState} from 'react';

export default {
	title: 'useMemo'
}

export const DifficultCountingExample = () => {

	const [a, setA] = useState(5)
	const [b, setB] = useState(5)

	let resultA = 1;
	let resultB = 1;

	resultA = useMemo(() => {
		let tempResultA = 1;
		for (let i = 1; i <= a; i++) {
			let fake = 0;
			while (fake < 1000000) {
				fake ++;
				const fakeValue = Math.random()
			}
			tempResultA = tempResultA * i
		}
		return tempResultA
	}, [a])


	for (let i = 1; i <= b; i++) {
		resultB = resultB * i;
	}

	return (
		<>
			<input type="text" value={a} onChange={(e) => (setA(Number(e.currentTarget.value)))}/>
			<input type="text" value={b} onChange={(e) => (setB(+e.currentTarget.value))}/>
			<div>Result for a: {resultA}</div>
			<div>Result for b: {resultB}</div>
		</>
	)
}


const UsersSecret = (props: {users: Array<string>}) => {
	console.log("users secret")
	return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
	console.log("HelpsToReactMemo")

	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

	const newArray = useMemo(() => {
		return users.filter(u => u.toLowerCase().indexOf("a") > -1)
	}, [users])

	const addUser = () => {
		const newUsers = [ ...users, 'Sveta']
		setUsers(newUsers)
	}

	return <>
		<button onClick={() => (setCounter(counter +1))}>+</button>
		<button onClick={() => addUser()}>add user</button>
		{counter}
		<Users users={newArray}/>
	</>
}

export const LikeUseCallback = () => {
	console.log("LikeUseCallback")
	const [counter, setCounter] = useState(0)
	const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

	const addBook = () => {
		console.log(books)
		const newUsers = [ ...books, 'Angular']
		setBooks(newUsers)
	}

	const memoizedAddBook = useMemo(() => {
		return () => {
			// console.log(books)
			// const newUsers = [ ...books, 'Angular']
			// setBooks(newUsers)
			addBook()
		}
	}, [books])

	const memoizedAddBook2 = useCallback(() => {
		// console.log(books)
		// const newUsers = [ ...books, 'Angular']
		// setBooks(newUsers)
		addBook()
	}, [books])

	return <>
		<button onClick={() => (setCounter(counter +1))}>+</button>
		{counter}
		<Book addBook={memoizedAddBook2}/>
	</>
}

type BookSecretPropsType = {
	addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
	console.log("books secret")
	return <div>
		<button onClick={() => props.addBook()}>add book</button>
	</div>
}

const Book = React.memo(BooksSecret)