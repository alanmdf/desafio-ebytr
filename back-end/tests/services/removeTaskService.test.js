/* eslint-disable mocha/no-setup-in-describe */
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

const ID_EXAMPLE = '507c7f79bcf86cd7994f6c0e';

describe('Remove Task Service: Remove task from database', function () {
    describe('when the request is successfull', function () {
        const DELETED_COUNT = 1;

        const removeTaskModelStub = sinon.stub().resolves(DELETED_COUNT);

        const removeTaskService = proxyquire('../../services/removeTask.service', {
            '../models/removeTask.model': removeTaskModelStub,
        });

        it('returns "deletedCount" with value "1"', async function () {
            const response = await removeTaskService(ID_EXAMPLE);
            expect(response).to.be.equal(DELETED_COUNT);
        });
  });
});