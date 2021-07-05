let areaRepo = require('../Repository/AreaRepository');

module.exports = {

    getAllAreas: async function() {
        return await areaRepo.getAllAreas();
    }
};