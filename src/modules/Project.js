class Project {
	constructor({ name }) {
		this.id = crypto.randomUUID();
		this.name = name;
		this.allNotes = [];
		this.projectNotes = [];
		this.completedNotes = [];
	}

	addNote(note) {
		this.projectNotes.push(note);
	}

	removeNote(note) {
		const noteIndex = this.projectNotes.indexOf(note);
		this.projectNotes.splice(noteIndex, 1);
	}

	getAllNotes() {
		return this.allNotes;
	}

	getUncompletedNotes() {
		return this.projectNotes;
	}

	getCompletedNotes() {
		return this.completedNotes;
	}

	completeNote(note) {
		this.completedNotes.push;
	}
}

export default Project;
