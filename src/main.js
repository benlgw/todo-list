import "./style.css";

import Note from "./modules/Note.js";
import Project from "./modules/Project.js";
import AppController from "./modules/AppController.js";
import DisplayController from "./modules/DisplayController.js";

const Display = new DisplayController();
const App = new AppController();

const defaultProject = new Project({ name: "default" });
App.addNewProject(defaultProject);

const defaultNote = new Note({
	title: "Default Note",
	description: "This note is created automatically.",
	dueDate: {
		day: new Date().getDate(),
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	},
	priority: "high",
});
defaultProject.addNote(defaultNote);

const testNote = new Note({
	title: "Test Note",
	description: "Test Note. This Note Should Not Be Left In Production!",
	dueDate: {
		day: new Date().getDate(),
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	},
	priority: "high",
});
defaultProject.addNote(testNote);

const testProject = new Project({ name: "testProject" });
App.addNewProject(testProject);

testProject.addNote({
	title: "A New Note?",
	description: "Note Num.2",
	dueDate: { day: 15, month: 6, year: 200 },
});
