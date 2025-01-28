import {
    createResponseService,
    deleteResponseService,
    getAllResponsesService,
    getResponseByIdService,
    updateResponseService,
  } from "../models/responseModel.js";
  

  // Standardized response function
  const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  export const createResponse = async (req, res, next) => {
    const {prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4 } = req.body;
    try {
      const newResponse = await createResponseService(prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4);
      handleResponse(res, 201, "Response created successfully", newResponse);
    } catch (err) {
      next(err);
    }
  };
  
  export const getAllResponses = async (req, res, next) => {
    try {
      const responses = await getAllResponsesService();
      handleResponse(res, 200, "Responses fetched successfully", responses);
    } catch (err) {
      next(err);
    }
  };
  
  export const getResponseById = async (req, res, next) => {
    try {
      const response = await getResponseByIdService(req.params.id);
      if (!response) return handleResponse(res, 404, "Response not found");
      handleResponse(res, 200, "Response fetched successfully", response);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateResponse = async (req, res, next) => {
    const { prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4 } = req.body;
    try {
      const updatedResponse = await updateResponseService(req.params.id, prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4);
      if (!updatedResponse) return handleResponse(res, 404, "Response not found");
      handleResponse(res, 200, "Response updated successfully", updatedResponse);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteResponse = async (req, res, next) => {
    try {
      const deletedResponse = await deleteResponseService(req.params.id);
      if (!deletedResponse) return handleResponse(res, 404, "Response not found");
      handleResponse(res, 200, "Response deleted successfully", deleteResponse);
    } catch (err) {
      next(err);
    }
  };