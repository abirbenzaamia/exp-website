import {
    createParticipantService,
    deleteParticipantService,
    getAllParticipantsService,
    getParticipantByIdService,
    updateParticipantService,
  } from "../models/participantModel.js";
  

  // Standardized response function
  const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  export const createParticipant = async (req, res, next) => {
    const {prolific_id, ip, user_agent, vpn, tpc_blocked, age, gender, education } = req.body;
    try {
      const newParticipant = await createParticipantService(prolific_id, ip, user_agent, vpn, tpc_blocked, age, gender, education);
      handleResponse(res, 201, "Participant created successfully", newParticipant);
    } catch (err) {
      next(err);
    }
  };
  
  export const getAllParticipants = async (req, res, next) => {
    try {
      const participants = await getAllParticipantsService();
      handleResponse(res, 200, "Participants fetched successfully", participants);
    } catch (err) {
      next(err);
    }
  };
  
  export const getParticipantById = async (req, res, next) => {
    try {
      const participant = await getParticipantByIdService(req.params.id);
      if (!participant) return handleResponse(res, 404, "Participant not found");
      handleResponse(res, 200, "Participant fetched successfully", participant);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateParticipant = async (req, res, next) => {
    const { prolific_id, ip, user_agent, vpn, tpc_blocked, age, gender, education } = req.body;
    try {
      const updatedParticipant = await updateParticipantService(req.params.id, prolific_id, ip, user_agent, vpn, tpc_blocked, age, gender, education);
      if (!updatedParticipant) return handleResponse(res, 404, "Participant not found");
      handleResponse(res, 200, "Participant updated successfully", updatedParticipant);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteParticipant = async (req, res, next) => {
    try {
      const deletedParticipant = await deleteParticipantService(req.params.id);
      if (!deletedParticipant) return handleResponse(res, 404, "Participant not found");
      handleResponse(res, 200, "Participant deleted successfully", deleteParticipant);
    } catch (err) {
      next(err);
    }
  };