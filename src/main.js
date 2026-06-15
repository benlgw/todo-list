import "./style.css";

import Note from "./modules/Note.js";
import Project from "./modules/Project.js";

const test = new Note({
	title: "test",
	description: "test description",
	dueDate: { day: 25, month: 12, year: 2069 },
});
