/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const server = express();
server.use(express.json());
server.use(cors());
server.listen(4000, () => {
	console.log("Le server ecoute sur le port 4000");
});

const getAllProjects = () => {
	const readFileProjects = fs.readFileSync("./person.json", "utf8");
	const allProjects = JSON.parse(readFileProjects);
	return allProjects;
};

const writeOnFile = (data) => {
	const allProjectsListInJson = JSON.stringify(data);
	fs.writeFileSync("./person.json", allProjectsListInJson, "utf8");
};

const getProject = (id) => {
	const projectById = allProjects.PortFolio.find((project) => {
		return (project.id = id);
	});
	return projectById;
};

const checkProject = (query, response, next) => {
	const id = query.params.id;
	const project = allProjects.PortFolio.find((project) => project.id === id);
	if (!project) return response.status(404).send("ressource indisponible");
	query.projet = project;
	next();
};

const allProjects = getAllProjects();

const BASE_URI = "/api/projects";

server.get(`${BASE_URI}/all`, (query, response) => {
	response.send(allProjects);
});

server.get(`${BASE_URI}/project/:id`, checkProject, (query, response) => {
	const idProject = query.params.id;
	response.send(getProject(idProject));
});

server.post(`${BASE_URI}/project`, (query, response) => {
	const project = {
		id: uuidv4(),
		name_project: query.body.name_project,
		about_project: query.body.about_project,
		link_project_github: query.body.link_project_github,
		link_projects: query.body.link_projects,
	};

	allProjects.PortFolio.push(project);
	writeOnFile(allProjects);
	response.send(getAllProjects());
});

server.put(`${BASE_URI}/project/:id`, checkProject, (query, response) => {
	const idProject = query.params.id;
	for (let project of allProjects.PortFolio) {
		if (project.id === idProject) {
			(project.name_project = query.body.name_project),
				(project.about_project = query.body.about_project),
				(project.link_project_github = query.body.link_project_github),
				(project.link_projects = query.body.link_projects);
		}
	}
	writeOnFile(allProjects);
	response.send(getProject(idProject));
});

server.delete(`${BASE_URI}/project/:id`, checkProject, (query, response) => {
	const idProject = query.params.id;
	for (let project of allProjects.PortFolio) {
		if (project.id === idProject) {
			const projectIndex = allProjects.PortFolio.indexOf(project);
			allProjects.PortFolio.splice(projectIndex, 1);
		}
	}
	writeOnFile(allProjects);
	response.send("Supprimé");
});
