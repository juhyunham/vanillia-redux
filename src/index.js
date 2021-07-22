import { createStore } from "redux";

const form = document.querySelector(`.todo_form`)
const input = form.querySelector(`input`)
const ul = document.querySelector(`.todo_list`)

const ADD_TODO = `ADD_TODO`
const DELETE_TODO = `DELETE_TODO`

const addToDo = (text) => {
	return {
		type: ADD_TODO,
		text
	}
}

const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		id
	}
}

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO :
			const newToDoObj = { text: action.text , id : Date.now() } 
			return [newToDoObj, ...state]
		case DELETE_TODO :
			const cleaned = state.filter((toDo) => toDo.id !== action.id);
			return cleaned
		default :
			return state;
	}
}

const store = createStore(reducer)

const dispatchAddTodo = (text) => {
	store.dispatch(addToDo(text))
}

const dispatchDeleteTodo = (event) => {
	const id = parseInt(event.target.parentNode.id)
	store.dispatch(deleteTodo(id))
}

const paintTodo = () => {
	const toDos = store.getState();

	ul.innerHTML = ``
	
	toDos.forEach((toDo) => {
		const li = document.createElement(`li`)
		const btn = document.createElement(`button`)
		
		btn.innerText = `삭제`
		
		li.id = toDo.id
		li.innerText = toDo.text
		
		li.appendChild(btn)
		ul.appendChild(li)

		btn.addEventListener(`click`, dispatchDeleteTodo)
	})
}

store.subscribe(paintTodo)

const onSubmit = (event) => {
	event.preventDefault()
	
	const toDo = input.value 
	input.value = ``

	dispatchAddTodo(toDo)
}

form.addEventListener(`submit`, onSubmit);