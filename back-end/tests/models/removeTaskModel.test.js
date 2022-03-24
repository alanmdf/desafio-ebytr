/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const getConnection = require('./mongoMockConnection');

const { removeTaskModel, createTaskModel } = require('../../models');

const currentDate = new Date().toISOString();
const randomId = ObjectId();

describe('Remove Task Model: Remove task', function () {
    let connectionMock;
    const newTask = {
      name: 'Teste',
      createdAt: currentDate,
      status: 'pendente',
    };

    before(async function () {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async function () {
        await connectionMock.db('desafioEbytr').collection('tasks').drop();
        MongoClient.connect.restore();
    });

    describe('when the request is successfull', function () {
        it('the task is successfully removed from the database', async function () {
        const newTaskId = await createTaskModel(newTask);

        const deletedCount = await removeTaskModel(newTaskId);

        const task = await connectionMock
            .db('desafioEbytr')
            .collection('tasks')
            .findOne({ _id: ObjectId(newTaskId) });

        expect(deletedCount).to.be.equal(1);
        expect(task).to.be.null;
        });
    });

    describe('when the request is not successfull', function () {
        it('the task was not found in the database', async function () {
        const deletedCount = await removeTaskModel(randomId);

        expect(deletedCount).to.be.equal(0);
        });
    });
});