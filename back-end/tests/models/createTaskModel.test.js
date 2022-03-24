/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const getConnection = require('./mongoMockConnection');

const { createTaskModel } = require('../../models');

const currentDate = new Date().toISOString();

describe('Create Task Model: Add new task to the database', function () {
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
    MongoClient.connect.restore();
  });

  describe('when the request is successfull', function () {
    it('the task is inserted in the database', async function () {
      const response = await createTaskModel(newTask);

      const taskCreated = await connectionMock
        .db('desafioEbytr')
        .collection('tasks')
        .findOne({ _id: ObjectId(response) });

      expect(taskCreated).to.be.not.null;
    });
  });
});