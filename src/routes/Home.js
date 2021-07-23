import React , {useState} from 'react';
import { connect } from 'react-redux';

const Home = ({ toDos }) => {
	const [ text, setText ] = useState("");

	function onSubmit (event) {
		event.preventDefault()
		setText("")
	}

	function onChange (event) {
		setText(event.target.value)
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange}/>
				<button type="button">Add</button>
			</form>
			<ul>
				{ JSON.stringify(toDos)}
			</ul>
		</>				
	)
};

function mapStateToProps(state, ownProps) {
	return { toDos: state }
}


export default connect(mapStateToProps)(Home)