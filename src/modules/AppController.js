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

	getAllNotes() {
		const allNotes = [];
		this.projects.forEach((project) => {
			allNotes.push(...project.projectNotes);
		});
		return allNotes;
	}
}

export default AppController;
