import { format } from "date-fns";

class Note {
	constructor({ title, description, dueDate, priority = "low" }) {
		this.title = title;
		this.description = description;
		// Date {day : dd, month : MM, year : yyyy}
		this.creationDate = this.getTodayDate();
		this.dueDate = format(new Date(this.formatDate(dueDate)), "dd/MM/yyyy");
		// Priority Values: "low", "medium, "high"
		this.priority = priority;
	}

	getTodayDate() {
		const dd = new Date().getDate;
		const mm = new Date().getMonth;
		const yyyy = new Date().getFullYear;
		return format(new Date(yyyy, mm, dd), "dd/MM/yyyy");
	}

	formatDate(date) {
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
}

export default Note;
