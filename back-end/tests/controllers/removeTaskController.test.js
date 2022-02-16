/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable max-len */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const DELETION_OK_MSG = 'Task deleted successfully';
const DELETION_FAILED_MSG = 'Task not found';
let DELETED_COUNT = 1;
const ID_EXAMPLE = '507c7f79bcf86cd7994f6c0e';

describe('Remove Task Controller: Remove task from database', function () {
    const response = {};
    const request = { params: '' };

    beforeEach(function () {
        request.params = ID_EXAMPLE;

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
    });

    describe('when the request is successfull', function () {
        const removeTaskServiceStub = sinon.stub().resolves(DELETED_COUNT);

        const removeTaskController = proxyquire('../../controllers/removeTask.controller', {
            '../services/': {
                removeTaskService: removeTaskServiceStub,
            },
        });
  
        it('the response status code is 200', async function () {
            await removeTaskController(request, response);
  
            expect(response.status.calledWith(200)).to.be.equal(true);
        });
  
        it(`the json response contains the message "${DELETION_OK_MSG}"`, async function () {
            await removeTaskController(request, response);
  
            expect(response.json.calledWith({ message: DELETION_OK_MSG })).to.be.equal(true);
        });
    });

    describe('when the request is not successfull', function () {
        DELETED_COUNT = 0;

        const removeTaskServiceStub = sinon.stub().resolves(DELETED_COUNT);

        const removeTaskController = proxyquire('../../controllers/removeTask.controller', {
            '../services/': {
                removeTaskService: removeTaskServiceStub,
            },
        });
  
        it('the response status code is 404', async function () {
            await removeTaskController(request, response);
  
            expect(response.status.calledWith(404)).to.be.equal(true);
        });
  
        it(`the json response contains the message "${DELETION_FAILED_MSG}"`, async function () {
            await removeTaskController(request, response);
  
            expect(response.json.calledWith({ message: DELETION_FAILED_MSG })).to.be.equal(true);
        });
    });
});