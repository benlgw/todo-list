import { format, formatDistance } from "date-fns";

class Note {
	constructor({
		id,
		title,
		description = "",
		dueDate,
		creationDate,
		priority = "low",
		completed = false,
	}) {
		this.id = id ?? crypto.randomUUID();
		this.title = title;
		this.description = description;
		// Date {day : dd, month : MM, year : yyyy}
		this.creationDate = creationDate ?? this.getTodayDate();
		this.dueDate = this.isFormatted(dueDate)
			? dueDate
			: this.formatDate(dueDate);
		// Priority Values: "low", "medium, "high"
		this.priority = priority;
		this.completed = completed;
	}

	getTodayDate() {
		const day = new Date().getDate();
		const month = new Date().getMonth();
		const year = new Date().getFullYear();
		return format(new Date(year, month, day), "dd/MM/yyyy");
	}

	isFormatted(date) {
		return typeof date === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(date);
	}

	formatDate(date) {
		if (typeof date === "string") {
			return format(new Date(date), "dd/MM/yyyy");
		}
		return format(new Date(date.year, date.month - 1, date.day), "dd/MM/yyyy");
	}

	changeNoteTitle(newtitle) {
		this.title = newtitle;
	}

	changeNoteDescription(newDescription) {
		this.description = newDescription;
	}

	changeNoteDueDate(newDueDate) {
		this.dueDate = this.formatDate(newDueDate);
	}

	changeNotePriority(newPriority) {
		this.priority = newPriority;
	}

	completeNote() {
		this.completed = true;
	}

	uncompleteNote() {
		this.completed = false;
	}

	isCompleted() {
		return this.completed;
	}

	static fromJSON(json) {
		return new Note(json);
	}
}

export default Note;
