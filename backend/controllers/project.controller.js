const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    const projects = await Project.find({ owner: req.user.id });
    res.json(projects);
};

exports.createProject = async (req, res) => {
    const { title, description } = req.body;
    const project = await Project.create({ title, description, owner: req.user.id });
    res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findOneAndUpdate(
        { _id: id, owner: req.user.id },
        { title, description },
        { new: true }
    );
    res.json(project);
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;
    await Project.findOneAndDelete({ _id: id, owner: req.user.id });
    res.status(204).end();
};
