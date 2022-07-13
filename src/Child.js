import React, { useEffect, useState } from "react";

const Child = ({ todos, addTodo }) => {
  console.log("하위실행")
	console.log("child render");
	return (
		<>
			<h2>My Todos</h2>
			{todos?.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
			<button onClick={addTodo}>Add Todo</button>
		</>
	);
};

export default React.memo(Child)