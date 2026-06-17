class AppController {
	constructor() {
		this.projects = [];
	}

	addNewProject(project) {
		this.projects.push(project);
	}

	getAllProjects() {
		return this.projects;
	}

	getProjectsForStorage() {
		return this.projects.filter((project) => project.name !== "default");
	}

	getAllNotes() {
		const allNotes = [];
		this.projects.forEach((project) => {
			allNotes.push(...project.projectNotes);
		});
		return allNotes;
	}

	getProjectById({ id }) {
		return this.projects.filter((project) => project.id === id);
	}

	removeProject(project) {
		const projectIndex = this.projects.indexOf(project);
		this.projects.splice(projectIndex, 1);
	}
}

export default AppController;
