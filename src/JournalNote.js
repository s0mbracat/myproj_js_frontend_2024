import React from 'react';

class JournalNote extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
		
		this.onDescClick = this.onDescClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onDescClick(e) {
		e.preventDefault();
		
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`notes/${this.props.note._id}`, {
			method: 'DELETE'
		}).then((res) => {
			if (res.status === 200) {
				console.log('Deleted');
				this.props.onNoteDelete(this.props.note._id);
			}
			else {
				console.log('Not Deleted');
			}
		}).then((data) => {
			this.setState({
				notes: data
			});
		});
	}
	
	render() {
		return (
			<li>
				<span onClick={this.onDescClick}><b>{this.props.note.name}</b> </span>
				<span>{this.props.note.date}</span>
				<button onClick={this.onDeleteClick}>Delete</button>
				<span><p>{this.props.note.description}</p></span>
			</li>
		)
	}
}

export default JournalNote;
