/* eslint-disable mocha/no-setup-in-describe */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const UPDATE_OK_MSG = 'Task updated successfully';
const UPDATE_FAILED_MSG = 'Task not found';
let MODIFIED_COUNT = 1;
const ID_EXAMPLE = '507c7f79bcf86cd7994f6c0e';
const currentDate = new Date().toISOString();

describe('Update Task Controller: Update task from the database', function () {
    const response = {};
    const request = { params: '' };

    beforeEach(function () {
        request.params = ID_EXAMPLE;
        request.body = {
            name: 'Teste Atualizado',
            createdAt: currentDate,
            status: 'em andamento',
        };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
    });

    describe('when the request is successfull', function () {
        const updateTaskServiceStub = sinon.stub().resolves(MODIFIED_COUNT);

        const updateTaskController = proxyquire('../../controllers/updateTask.controller', {
            '../services/': {
                updateTaskService: updateTaskServiceStub,
            },
        });
  
        it('the response status code is 200', async function () {
            await updateTaskController(request, response);
  
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
  
        it(`the json response contains the message "${UPDATE_OK_MSG}"`, async function () {
            await updateTaskController(request, response);
  
            expect(response.json.calledWith({ message: UPDATE_OK_MSG })).to.be.equal(true);
        });
    });

    describe('when the request is not successfull', function () {
        MODIFIED_COUNT = 0;

        const updateTaskServiceStub = sinon.stub().resolves(MODIFIED_COUNT);

        const updateTaskController = proxyquire('../../controllers/updateTask.controller', {
            '../services/': {
                updateTaskService: updateTaskServiceStub,
            },
        });
  
        it('the response status code is 404', async function () {
            await updateTaskController(request, response);
  
            expect(response.status.calledWith(404)).to.be.equal(true);
        });
  
        it(`the json response contains the message "${UPDATE_FAILED_MSG}"`, async function () {
            await updateTaskController(request, response);
  
            expect(response.json.calledWith({ message: UPDATE_FAILED_MSG })).to.be.equal(true);
        });
    });
});