const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const getConnection = require('./mongoMockConnection');

const { getAllTasksModel } = require('../../models');

describe('Get All Tasks Model: List all tasks stored in the database', function () {
    let connectionMock;

      before(async function () {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      });

      after(async function () {
        MongoClient.connect.restore();
      });

  describe('when the request is successfull', function () {
    it('returns an array', async function () {
      const response = await getAllTasksModel();

      expect(response).to.be.an('array');
    });

    it('every array item is a document with the specified properties', async function () {
        const response = await getAllTasksModel();

        response.forEach((document) => {
            expect(document).to.have.property('_id');
            expect(document).to.have.property('name');
            expect(document).to.have.property('createdAt');
            expect(document).to.have.property('status');
        });
    });
  });
});