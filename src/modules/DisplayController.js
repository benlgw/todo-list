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
		project.innerText = this.capitalise(projectName);
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
		noteCard.classList.add("note");
		note.priority === "low"
			? (noteCard.style.backgroundColor = "rgba(55, 255, 0, 0.3)")
			: note.priority === "medium"
				? (noteCard.style.backgroundColor = "rgba(255, 200, 0, 0.3)")
				: (noteCard.style.backgroundColor = "rgba(255, 0, 0, 0.3)");
		noteCard.setAttribute("id", note.id);

		const title = document.createElement("h2");
		title.textContent = this.capitalise(note.title);
		noteCard.append(title);

		const description = document.createElement("p");
		description.classList.add("description");
		description.textContent = note.description;
		noteCard.append(description);

		const buttons = document.createElement("div");
		buttons.classList.add("note-buttons");

		const deleteButton = document.createElement("button");
		const deleteButtonImage = document.createElement("img");
		deleteButtonImage.setAttribute("src", "./src/assets/images/bin-1-bold.svg");
		deleteButton.append(deleteButtonImage);
		buttons.append(deleteButton);

		const dueDate = document.createElement("p");
		dueDate.textContent = note.dueDate;
		buttons.append(dueDate);

		const completeButton = document.createElement("button");
		const completeButtonImage = document.createElement("img");
		completeButtonImage.setAttribute("src", "./src/assets/images/tick-04.svg");
		completeButton.append(completeButtonImage);
		buttons.append(completeButton);

		noteCard.append(buttons);
		return noteCard;
	}

	showNotes({ notes }) {
		const notesSection = document.querySelector("#notes");
		notesSection.innerHTML = "";
		notes.forEach((note) => {
			const noteCard = this.createNote(note);
			notesSection.append(noteCard);
		});
	}

	capitalise(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

export default DisplayController;
