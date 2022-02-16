/* eslint-disable mocha/no-setup-in-describe */
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');

const currentDate = new Date().toISOString();

describe('Get All Tasks Service: List all tasks stored in the database', function () {
    describe('when the request is successfull', function () {
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

        const getAllTasksModelStub = sinon.stub().resolves(tasksList);

        const getAllTasksService = proxyquire('../../services/getAllTasks.service', {
            '../models/getAllTasks.model': getAllTasksModelStub,
        });

        it('returns an array', async function () {
            const response = await getAllTasksService();
            expect(response).to.be.an('array');
        });

        it('every array item is a document with the specified properties', async function () {
            const response = await getAllTasksService();
            // console.log('🚀 ~ file: getAllTasksService.test.js ~ line 38 ~ response', response);
    
            response.forEach((document) => {
                console.log(document);
                expect(document).to.have.property('_id');
                expect(document).to.have.property('name');
                expect(document).to.have.property('createdAt');
                expect(document).to.have.property('status');
            });
        });
  });
});