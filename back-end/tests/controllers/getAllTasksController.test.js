/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const currentDate = new Date().toISOString();

describe('Get All Tasks Controller: List all tasks stored in the database', function () {
    describe('when the request is successfull', function () {
        const response = {};
        const request = {};
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        const tasksList = [
            {
                _id: '604cb554311d68f491ba5781',
                name: 'Teste 1',
                createdAt: currentDate,
                status: 'pendente',
            },
            {
                _id: '604cb554311d68f491ba5782',
                name: 'Teste 2',
                createdAt: currentDate,
                status: 'em andamento',
            },
        ];

        const getAllTasksServiceStub = sinon.stub().resolves(tasksList);

        const getAllTasksController = proxyquire('../../controllers/getAllTasks.controller', {
            '../services/': {
                getAllTasksService: getAllTasksServiceStub,
            },
        });
  
        it('the response status code is 200', async function () {
            await getAllTasksController(request, response);
  
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
  
        it('the json response contains an array with the tasks stored in the database', async function () {
            await getAllTasksController(request, response);
  
            expect(response.json.calledWith(tasksList)).to.be.equal(true);
        });
    });
});