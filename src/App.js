import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JournalList from './JournalList';
import JournalNoteAdd from './JournalNoteAdd';
import { journalAddAll } from './actions';

class App extends React.Component {
	componentDidMount() {
		fetch('notes').then(function(res) {
			return res.json();
		}).then((data) => {
			this.props.dispatch(journalAddAll(data));
		});
	}
	
	render() {
			    return (
				<div className="App">
					<Provider store={this.props.store}>
						<Router>
							<Routes>
								<Route path="/" element={<JournalList />} />
								<Route path="/add" element={<JournalNoteAdd />} />
							</Routes>
						</Router>
					</Provider>
				</div>
			  );
	}
}

export default connect()(App);
