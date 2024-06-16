import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { journalAdd } from './actions';

function getDateOnAdd() {

	const currentDate = new Date();

	let currentHour = currentDate.getHours();
	let currentMinute = currentDate.getMinutes();

	if (currentMinute < 10) currentMinute = "0" + currentMinute;

	let currentTime = currentHour + ":" + currentMinute;

	let currentDayOfMonth = currentDate.getDate();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	let dateString = currentTime + " " + currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

	return dateString;

}

class JournalNoteAddInner extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			description: '',
			date: getDateOnAdd()
		}
		
		this.onNameChange = this.onNameChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
	}
	
	onNameChange(e) {
		e.preventDefault();
		
		this.setState({
			name: e.target.value
		});
		
	}
	
	onDescriptionChange(e) {
		e.preventDefault();
		
		this.setState({
			description: e.target.value
		});
		
	}
	
	onAddFormSubmit(e) {
		e.preventDefault();
		
		fetch('notes', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				description: this.state.description,
				date: this.state.date
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.props.dispatch(journalAdd(data._id, data.name, data.description, data.date));
			this.props.history('/');
		});
	}
	
	render() {
		return (
		<div className="page-content container note-has-grid">
		<div className="page-content container note-has-grid">
				<ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
					<li className="nav-item">
						<NavLink className="nav-link btn-primary rounded-pill d-flex align-items-center px-3" to='/'><i className="icon-note m-1"><span className="d-none d-md-block font-14">Back to list</span></i></NavLink>
					</li>
				</ul>
		</div>
		<div className="card card-body d-flex align-items-center justify-content-start">
			<form onSubmit={this.onAddFormSubmit}>
				<div align="center"><input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Title" className="nameinputform grid" /></div>
				<div align="center"><textarea value={this.state.description} onChange={this.onDescriptionChange} placeholder="Share your thoughts..." className="descinputform grid"></textarea></div>
				<div align="center"><input type="submit" value="Add" /></div>
			</form>
		</div>
		</div>
		)
	}
}

const JournalNoteAdd = (props) => {
	return (
		<JournalNoteAddInner {...props} history={useNavigate()} />
	)
}

export default connect()(JournalNoteAdd);
