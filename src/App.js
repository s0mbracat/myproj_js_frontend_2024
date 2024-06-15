import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JournalList from './JournalList';
import JournalNoteAdd from './JournalNoteAdd';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			notes: []
		}
		
		this.onNoteAdd = this.onNoteAdd.bind(this);
		this.onNoteDelete = this.onNoteDelete.bind(this);

		
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
	
	onNoteAdd(note) {
		this.setState({
			notes: [...this.state.notes, note]
		});
	}	
	
	onNoteDelete(_id) {
		this.setState({
			notes: this.state.notes.filter(function(note) {
				return note._id !== _id;
			})
		});
	}
	
	render() {
			    return (
				<div className="App">
					<Router>
						<Routes>
							<Route path="/" element={<JournalList notes={this.state.notes} onNoteDelete={this.onNoteDelete} />} />
							<Route path="/add" element={<JournalNoteAdd onNoteAdd={this.onNoteAdd} />} />
						</Routes>
					</Router>
				</div>
			  );
	}
}

export default App;
