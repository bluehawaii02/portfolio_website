import project from "../models/projectsModel.js";


export const likeProject = async(req, res)=>{
    try {
        const Project = await  project.findById(req.params.id);

        if(!Project){
            return res.status(404).json({
                message: 'project not found'
            });
        }

        Project.likes = (Project.likes || 0) + 1;

        await Project.save();

        res.json({likes: Project.likes});
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    };
}

export const dislikeProject = async(req, res)=>{
    try {
        const Project = await  project.findById(req.params.id);

        if(!Project){
            return res.status(404).json({
                message: 'project not found'
            });
        }

        Project.dislikes = (Project.dislikes || 0) + 1;

        await Project.save();

        res.json({dislikes: Project.dislikes});
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    };
}

export const getProjects = async(req, res)=>{
    try {
        const projects = await project.find();

        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}