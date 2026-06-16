class Project {
	constructor({ name }) {
		this.id = crypto.randomUUID();
		this.name = name;
		this.allNotes = [];
		this.projectNotes = [];
		this.completedNotes = [];
	}

	addNote(note) {
		this.allNotes.push(note);
		this.projectNotes.push(note);
	}

	removeNote(note) {
		const noteIndexAllNotes = this.allNotes.indexOf(note);
		this.projectNotes.splice(noteIndexAllNotes, 1);
		const noteIndexProjectNotes = this.projectNotes.indexOf(note);
		this.projectNotes.splice(noteIndexProjectNotes, 1);
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
