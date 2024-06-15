import React from 'react';

import JournalNote from './JournalNote';

class JournalList extends React.Component {
	render() {
			    return (
				<div className="List">
					<ul>
					{
						this.props.notes.map((note) => {
							return (
								<JournalNote note={note} onNoteDelete={this.props.onNoteDelete} key={note._id} />
							)
						})
					}
					</ul>
				</div>
			  );
	}
}

export default JournalList;
