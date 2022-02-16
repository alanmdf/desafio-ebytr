/* eslint-disable mocha/no-setup-in-describe */
const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

const currentDate = new Date().toISOString();

describe('Update Task Service: Update task from the database', function () {
    describe('when the request is successfull', function () {
        const ID_EXAMPLE = '507c7f79bcf86cd7994f6c0e';
        
        const taskToUpdate = {
            name: 'Teste Atualizado',
            createdAt: currentDate,
            status: 'em andamento',
        };

        const MODIFIED_COUNT = 1;

        const updateTaskModelStub = sinon.stub().resolves(MODIFIED_COUNT);

        const updateTaskService = proxyquire('../../services/updateTask.service', {
            '../models/': {
                updateTaskModel: updateTaskModelStub,
            },
        });
        
        it('returns "modifiedCount" with value "1"', async function () {
            const response = await updateTaskService(ID_EXAMPLE, taskToUpdate);

            expect(response).to.be.equal(MODIFIED_COUNT);
        });
    });
});