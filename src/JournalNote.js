import React from 'react';
import { connect } from 'react-redux';

import { journalDelete } from './actions';

class JournalNote extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
		
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`notes/${this.props.note._id}`, {
			method: 'DELETE'
		}).then((res) => {
			if (res.status === 200) {
				console.log('Deleted');
				this.props.dispatch(journalDelete(this.props.note._id));
			}
			else {
				console.log('Not Deleted');
			}
		});
	}
	
	render() {
		return (
			<li className="card card-body d-flex align-items-center justify-content-start">
				<h5 className="note-title text-truncate mb-0" data-noteheading={this.props.note.name}>
					{this.props.note.name}
				</h5>
				<p className="note-date font-12 text-muted mx-3">{this.props.note.date}</p>
				<p className="note-inner-content text-muted" data-notecontent={this.props.note.description}>
					{this.props.note.description}
				</p>
				<button className="btn btn-link p-0 ml-auto" onClick={this.onDeleteClick}>
					<i className="fa fa-trash remove-note"></i>
				</button>
			</li>
		)
	}
}

export default connect()(JournalNote);
