import React from 'react';

import JournalNote from './JournalNote';

import JournalNoteAdd from './JournalNoteAdd';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			notes: []
		}
		
		this.onNoteDelete = this.onNoteDelete.bind(this);
		this.onNoteAdd = this.onNoteAdd.bind(this);
	}
	
	componentDidMount() {
		fetch('notes').then(function(res) {
			return res.json();
		}).then((data) => {
			this.setState({
				notes: data
			});
		});
	}
	
	onNoteDelete(_id) {
		this.setState({
			notes: this.state.notes.filter(function(note) {
				return note._id !== _id;
			})
		});
	}
	
	onNoteAdd(note) {
		this.setState({
			notes: [...this.state.notes, note]
		});
	}
	
	render() {
			    return (
				<div className="App">
					<JournalNoteAdd onNoteAdd={this.onNoteAdd} />
					<ul>
					{
						this.state.notes.map((note) => {
							return (
								<JournalNote note={note} onNoteDelete={this.onNoteDelete} key={note._id} />
							)
						})
					}
					</ul>
				</div>
			  );
	}
}

export default App;
