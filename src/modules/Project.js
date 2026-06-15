class Project {
	constructor({ name }) {
		this.name = name;
		this.projectNotes = [];
	}

	addNote(note) {
		this.projectNotes.push(note);
	}

	removeNote(note) {
		const noteIndex = this.projectNotes.indexOf(note);
		this.projectNotes.splice(noteIndex, 1);
	}
}

export default Project;
