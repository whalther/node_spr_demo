let empRepo = require('../Repository/EmployeeRepository');

module.exports = {

    getAllEmployees: async function() {
        return await empRepo.getAllEmployees();
    },

    updateEmployee: async function(employee) {
        return await empRepo.updateEmployee(employee);
    },
    createEmployee: async function(employee) {
        return await empRepo.createEmployee(employee);
    }    
};