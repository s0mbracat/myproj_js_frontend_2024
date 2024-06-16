import { combineReducers } from 'redux';

import { JOURNAL_ADD, JOURNAL_ADD_ALL, JOURNAL_DELETE } from './actions';

function journal(state = [], action) {
	switch (action.type) {
		case JOURNAL_ADD:
			return [
				...state, {
					_id: action._id, 
					name: action.name, 
					description: action.description,
					date: action.date
				}
			]
		case JOURNAL_ADD_ALL:
			return [
				...action.journal_list
			]
		case JOURNAL_DELETE:
			return state.filter(function(note) {
				return note._id !== action._id;
			})
		default:
			return state
	}
}

export default combineReducers({
	notes: journal
});