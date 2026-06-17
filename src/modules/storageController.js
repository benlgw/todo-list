class StorageController {
	constructor() {
		this.key = "projects";
	}

	stringify(array) {
		return JSON.stringify(array);
	}

	save(json) {
		localStorage.setItem(this.key, this.stringify(json));
	}

	retrieve() {
		return this.parse(localStorage.getItem(this.key));
	}

	parse(json) {
		return JSON.parse(json);
	}

	clear() {
		localStorage.clear();
	}
}

export default StorageController;
