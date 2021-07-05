let subAreaRepo = require('../Repository/SubAreaRepository');

module.exports = {

    getAllSubAreas: async function() {
        return await subAreaRepo.getAllSubAreas();
    }
};