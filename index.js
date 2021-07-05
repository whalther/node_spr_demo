let employeeService = require('./Services/EmployeeService');
let areaService = require('./Services/AreaService');
let subAreaService = require('./Services/SubAreasService');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/ListEmployees', async(req, res) => {
    //const b = req.body;
    let result = await employeeService.getAllEmployees();
    res.status(200).send({Employees: result.recordsets[0]});
});

app.post('/UpdateEmployee', async(req, res) => {
    const emp = req.body;
    let result = await employeeService.updateEmployee(emp);
    res.status(200).send({RowsAffected: result});
});

app.post('/CreateEmployee', async(req, res) => {
    const emp = req.body;
    let result = await employeeService.createEmployee(emp);
    res.status(200).send({RowsAffected: result});
});

app.post('/ListArea', async(req, res) => {
    let result = await areaService.getAllAreas();
    res.status(200).send({Areas: result.recordsets[0]});
});

app.post('/ListSubArea', async(req, res) => {
    //const b = req.body;
    let result = await subAreaService.getAllSubAreas();
    res.status(200).send({SubAreas: result.recordsets[0]});
});


app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);
