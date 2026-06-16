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
	App.addNewProject({ name: "Test" });
});

const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
	project.addEventListener("click", (e) => {
		if (e.ctrlKey && project.textContent !== "All Projects") {
			Display.selectMultipleButtons(project);
		} else {
			Display.selectButton(project);
			if (project.textContent === "All Projects") {
				Display.showNotes({ notes: App.getAllNotes() });
			} else {
				// do different stuff
			}
		}
	});
});
