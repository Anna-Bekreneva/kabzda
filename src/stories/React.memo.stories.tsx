import React, {useState} from 'react';
import {Rating} from '../components/Rating/Rating';

export default {
	title: 'React.memo demo',
	component: Rating,
}

const NewMessagesCounter = (props: {count: number}) => {
	return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
	console.log("users")
	return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
	console.log("Example1")

	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

	const addUser = () => {
		const newUsers = [ ...users, 'Sveta']
		setUsers(newUsers)
	}

	return <>
		<button onClick={() => (setCounter(counter +1))}>+</button>
		<button onClick={addUser}>add user</button>
		<NewMessagesCounter count={counter}></NewMessagesCounter>
		<Users users={users}/>
	</>
}