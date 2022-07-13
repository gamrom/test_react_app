import { useCallback, useEffect, useMemo, useState } from "react";

import Child from "./Child";

function App() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = useCallback(() => {
		setCount((c) => c + 1);
	}, [count]);

	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, [todos]);

	console.log("상위실행");

	return (
		<>
			<Child todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}

export default App;
