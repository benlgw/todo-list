import "./style.css";

import Note from "./modules/Note.js";
import Project from "./modules/Project.js";
import AppController from "./modules/AppController.js";
import DisplayController from "./modules/DisplayController.js";

const App = new AppController();
const Display = new DisplayController();

// Initalise Default Project and Note
const defaultProject = new Project({ name: "default" });
App.addNewProject(defaultProject);
Display.createProjectButton({
	id: defaultProject.id,
	projectName: defaultProject.name,
});

const defaultNote = new Note({
	title: "Default Note",
	description: "This note is created automatically.",
	dueDate: {
		day: new Date().getDate(),
		month: new Date().getMonth() + 1,
		year: new Date().getFullYear(),
	},
	priority: "high",
});
defaultProject.addNote(defaultNote);

const all = document.querySelector(".project");
Display.selectButton(all);
Display.showNotes({ notes: App.getAllNotes() });
//  End Default Project and Note

// Event Listeners
let selectedProjects = [];
const sidebar = document.querySelector("#sidebar");
sidebar.addEventListener("click", (e) => {
	const project = e.target.closest(".project");
	if (!project) return;

	if (e.ctrlKey && project.textContent !== "All Projects") {
		selectedProjects.push(project);
		Display.selectMultipleButtons(project);
	} else {
		Display.selectButton(project);
		if (project.textContent === "All Projects") {
			selectedProjects = [];
			Display.showNotes({ notes: App.getAllNotes() });
		} else {
			selectedProjects = [];
			selectedProjects.push(project);
			const buttonId = project.id;
			const projectObject = App.getProjectById({ id: buttonId })[0];
			const projectNotes = projectObject.getAllNotes();
			Display.showNotes({ notes: projectNotes });
		}
	}
});

const newProjectButton = document.querySelector("#newProject");
newProjectButton.addEventListener("click", () => {
	Display.toggleProjectModal();
});

const projectModalForm = document.querySelector("#projectModal form");
const createProjectButton = document.querySelector("#createNewProject");
createProjectButton.addEventListener("click", () => {
	if (!projectModalForm.reportValidity()) return;
	const projectTitle = projectModalForm[0].value;
	const newProject = new Project({ name: projectTitle });
	App.addNewProject(newProject);
	Display.createProjectButton({
		id: newProject.id,
		projectName: newProject.name,
	});
	Display.toggleProjectModal();
});

const newNoteButton = document.querySelector("#newNote");
newNoteButton.addEventListener("click", () => {
	if (selectedProjects.length === 0) return;
	Display.toggleNotetModal();
});

const noteModalForm = document.querySelector("#noteModal form");
const createNoteButton = document.querySelector("#createNewNote");
createNoteButton.addEventListener("click", () => {
	if (!noteModalForm.reportValidity()) return;
	const noteTitle = noteModalForm[0].value;
	const noteDescription = noteModalForm[1].value;
	const noteDueDate = noteModalForm[2].value;
	const notePriority = noteModalForm.querySelector(
		'input[name="notePriority"]:checked',
	)?.value;
	const newNote = new Note({
		title: noteTitle,
		description: noteDescription,
		dueDate: noteDueDate,
		priority: notePriority,
	});

	const projectId = selectedProjects[0].id;
	const selectedProject = App.getProjectById({ id: projectId })[0];

	selectedProject.addNote(newNote);
	const refresh = selectedProject.getUncompletedNotes();
	Display.showNotes({ notes: refresh });
	Display.toggleNotetModal();
});
