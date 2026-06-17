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
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	},
	priority: "high",
});
defaultProject.addNote(defaultNote);
//  End Default Project and Note

// Event Listeners
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
