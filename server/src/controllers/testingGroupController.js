import {Mutex} from 'async-mutex'


import {
    getAllTestingGroupsService,
    getTestingGroupByIdService,
    getTestingGroupByProlificIdService,
    getTestingGroupsService,
    createTestingGroupService,
    updateTestingGroupService,
    deleteTestingGroupService
} from "../models/testingGroupModel.js";
  
const groupMutex = new Mutex();

  // Standardized response function
  const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  // export const createTestingGroup = async (req, res, next) => {
  //   const {prolific_id, test_group } = req.body;
  //   try {
  //     const newTestingGroup = await createTestingGroupService(prolific_id, test_group);
  //     handleResponse(res, 201, "TestingGroup created successfully", newTestingGroup);
  //   } catch (err) {
  //     next(err);
  //   }
  // };
  
  export const getAllTestingGroups = async (req, res, next) => {
    try {
      const testing_groups = await getAllTestingGroupsService();
      handleResponse(res, 200, "TestingGroups fetched successfully", testing_groups);
    } catch (err) {
      next(err);
    }
  };
  
  export const getTestingGroupById = async (req, res, next) => {
    try {
      const testing_group = await getTestingGroupByIdService(req.params.id);
      if (!testing_group) return handleResponse(res, 404, "Testing Group not found");
      handleResponse(res, 200, "TestingGroup fetched successfully", testing_group);
    } catch (err) {
      next(err);
    }
  };


  export const getTestingGroupByProlificId = async (req, res, next) => {
    try {
        const testing_group = await getTestingGroupByProlificIdService(req.params.prolific_id);
        if (!testing_group) return handleResponse(res, 404, "TestingGroup not found");
        handleResponse(res, 200, "TestingGroup fetched successfully", testing_group);
      } catch (err) {
        next(err);
      }
  };

  // Assign a user to a group and update DB
  export const createTestingGroup = async (req, res, next) => {
    const assigned_users = await getAllTestingGroupsService()
    const release = await groupMutex.acquire();
    const {prolific_id} = req.body;
    try {
      let assign = false;
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 3);
        let group = await getTestingGroupsService(randomIndex);
        //console.log(group)
        let groupLength = group && Object.keys(group).length || 0;
        //onsole.log(groupLength)
        if (groupLength <= assigned_users.length * (1/3)) assign = true
        
      } while (!assign);
        // we need control2 group 

        const new_testing_group = await createTestingGroupService( prolific_id, randomIndex )
        handleResponse(res, 201, "testing group for a user created successfully", new_testing_group);
    }catch (err){
      next(err)
    }
     finally {
      if (release) release();
    }
  }
  
  export const updateTestingGroup = async (req, res, next) => {
    const { prolific_id, test_group } = req.body;
    try {
      const updatedTestingGroup = await updateTestingGroupService(req.params.id, prolific_id, test_group);
      if (!updatedTestingGroup) return handleResponse(res, 404, "TestingGroup not found");
      handleResponse(res, 200, "TestingGroup updated successfully", updatedTestingGroup);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteTestingGroup = async (req, res, next) => {
    try {
      const deletedTestingGroup = await deleteTestingGroupService(req.params.id);
      if (!deletedTestingGroup) return handleResponse(res, 404, "TestingGroup not found");
      handleResponse(res, 200, "TestingGroup deleted successfully", deletedTestingGroup);
    } catch (err) {
      next(err);
    }
  };