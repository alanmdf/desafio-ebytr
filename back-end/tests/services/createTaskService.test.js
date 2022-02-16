/* eslint-disable mocha/no-setup-in-describe */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const currentDate = new Date().toISOString();

describe('Create Task Service: Add new task to the database', function () {
    describe('when the request is successfull', function () {
        const newTask = {
            name: 'Teste',
            createdAt: currentDate,
            status: 'pendente',
        };

        const RANDOM_ID = '620c4870ada11055bb31655e';

        const createTaskModelStub = sinon.stub().resolves(RANDOM_ID);

        const createTaskService = proxyquire('../../services/createTask.service', {
            '../models/createTask.model': createTaskModelStub,
        });
        
        it('returns the task ID', async function () {
            const response = await createTaskService(newTask);
            expect(response).to.be.equal(RANDOM_ID);
        });
    });
});