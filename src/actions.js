export const JOURNAL_ADD = 'JOURNAL_ADD'
export const JOURNAL_ADD_ALL = 'JOURNAL_ADD_ALL'
export const JOURNAL_DELETE = 'JOURNAL_DELETE'
export const JOURNAL_UPDATE_STATE = 'JOURNAL_UPDATE_STATE'

export function journalAdd(_id, name, description, date) {
	return { type: JOURNAL_ADD, _id, name, description, date };
}

export function journalAddAll(journal_list) {
	return { type: JOURNAL_ADD_ALL, journal_list };
}

export function journalDelete(_id) {
	return { type: JOURNAL_DELETE, _id };
}

export function journalUpdateState(_id) {
	return { type: JOURNAL_ADD_ALL, _id };
}