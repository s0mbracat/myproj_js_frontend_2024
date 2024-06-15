import React from 'react';

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

class JournalNoteAdd extends React.Component {
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
			this.props.onNoteAdd(data);
		});
	}
	
	render() {
		return (
			<form onSubmit={this.onAddFormSubmit}>
				<input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Name" />
				<input type="text" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" />
				<input type="submit" value="Add" />
			</form>
		)
	}
}

export default JournalNoteAdd;
