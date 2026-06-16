const sidebar = document.querySelector("#sidebar");
const content = document.querySelector("#content");

class DisplayController {
	constructor() {
		const allProjects = document.createElement("button");
		allProjects.classList.add("project");
		allProjects.textContent = "All Projects";
		sidebar.append(allProjects);
	}

	createProjectButton({ id, projectName }) {
		const project = document.createElement("button");
		project.classList.add("project");
		project.setAttribute("id", id);
		project.innerText =
			projectName.charAt(0).toUpperCase() + projectName.slice(1);
		sidebar.append(project);
	}

	selectButton(project) {
		const projects = document.querySelectorAll(".project");
		projects.forEach((project) => {
			project.classList.remove("clicked");
		});
		project.classList.add("clicked");
	}

	selectMultipleButtons(project) {
		const allProjectsButton = document.querySelector(".project");
		allProjectsButton.classList.remove("clicked");
		project.classList.add("clicked");
	}

	createNote(note) {
		const noteCard = document.createElement("div");
	}

	showNotes({ notes }) {
		const notesSection = document.querySelector("#notes");
		notesSection.innerHTML = "";
		notes.forEach((note) => {
			const noteCard = this.createNote(note);
		});
	}
}

export default DisplayController;
