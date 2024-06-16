import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import JournalNote from './JournalNote';

class JournalList extends React.Component {
	render() {
		return (		
			<div className="page-content container note-has-grid">
				<ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
					<li className="nav-item">
						<NavLink className="nav-link btn-primary rounded-pill d-flex align-items-center px-3" to='/add'><i className="icon-note m-1"><span className="d-none d-md-block font-14">Add Note</span></i></NavLink>
					</li>
				</ul>
				
				<div className="tab-content bg-transparent">
					<div id="note-full-container" className="note-has-grid row">
						<ul>
							{
								this.props.notes.map((note) => {
									return (
										<JournalNote note={note} key={note._id} />
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		notes: [...state.notes]
	}
}

export default connect(mapStateToProps)(JournalList);
