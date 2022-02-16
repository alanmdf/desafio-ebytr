/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const currentDate = new Date().toISOString();

describe('Create Task Controller: Add new task to the database', function () {
    describe('when the request is successfull', function () {
        const response = {};
        const request = {};

        request.body = {
            name: 'Teste',
            createdAt: currentDate,
            status: 'pendente',
        };
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        const RANDOM_ID = '620c4870ada11055bb31655e';

        const createTaskServiceStub = sinon.stub().resolves(RANDOM_ID);

        const createTaskController = proxyquire('../../controllers/createTask.controller', {
            '../services/': {
                createTaskService: createTaskServiceStub,
            },
        });
  
        it('the response status code is 201', async function () {
            await createTaskController(request, response);
  
            expect(response.status.calledWith(201)).to.be.equal(true);
        });
  
        it('the json response contains correct informations about the inserted task', async function () {
            await createTaskController(request, response);
  
            expect(response.json.calledWith({ _id: RANDOM_ID, ...request.body })).to.be.equal(true);
        });
    });
});