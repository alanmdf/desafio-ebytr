/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');

const { updateTaskModel, createTaskModel } = require('../../models');

const currentDate = new Date().toISOString();

describe('Update Task Model: Update task from the database', function () {
    let connectionMock;

    const newTask = {
        name: 'Teste',
        createdAt: currentDate,
        status: 'pendente',
    };

    const taskToUpdate = {
        name: 'Teste Atualizado',
        createdAt: currentDate,
        status: 'em andamento',
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
        it('the task is updated in the database', async function () {
            const insertedId = await createTaskModel(newTask);

            const modifiedCount = await updateTaskModel(insertedId, taskToUpdate);

            const taskUpdated = await connectionMock
                .db('desafioEbytr')
                .collection('tasks')
                .findOne({ _id: ObjectId(insertedId) });

            expect(modifiedCount).to.be.equal(1);
            expect(taskUpdated).to.be.not.null;
            expect(taskUpdated.name).to.be.equal(taskToUpdate.name);
            expect(taskUpdated.createdAt).to.be.equal(taskToUpdate.createdAt);
            expect(taskUpdated.updatedAt).to.be.not.null;
            expect(taskUpdated.status).to.be.equal(taskToUpdate.status);
        });
    });
});