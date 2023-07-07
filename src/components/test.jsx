import React from 'react';
import { useState } from 'react';

export default function Test() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>Contador: {count}</h1>
			<button onClick={increment}>Incrementar</button>
			<button onClick={decrement}>Decrementar</button>
		</div>
	);
}
