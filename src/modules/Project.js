import Note from "./Note.js";

class Project {
	constructor({ id, name, allNotes = [], completedNotes = [] }) {
		this.id = id ?? crypto.randomUUID();
		this.name = name;
		this.allNotes = allNotes.map((note) =>
			note instanceof Note ? note : Note.fromJSON(note),
		);
		this.completedNotes = completedNotes.map((note) =>
			note instanceof Note ? note : Note.fromJSON(note),
		);
		this.projectNotes = this.allNotes.filter((note) => !note.completed);
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

	static fromJSON(json) {
		return new Project(json);
	}
}

export default Project;
