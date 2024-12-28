import User from "../models/User.model.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({users});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const getUser = async (req, res) => {
    try{
        const id = req.params.id; //extract value from parameters as string
        const user = await User.findById(id);
        res.status(200).json(user);

        if(!user) {
            return res.status(404).json({message:"Error User not found"});
        }
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);

        res.status(201).json({message: "user created", user});
        
    }catch (error) {
        console.log("got here");
        console.error("Error occurred while creating user: ", error); 
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user) {
            return res.status(404).json({message:"Error User not found"});
        }

        res.status(200).json({message: "user updated", user});
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

const deleteUser = async (req, res) => {
    try{
        const id = req.params.id; 
        await User.findByIdAndDelete(id);

        res.status(200).json(`User deleted at id : ${id}`);
    }catch (error) {
        res.status(500).json({message: error.message}); // check out express demo to find out more about error.msg
    }
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };