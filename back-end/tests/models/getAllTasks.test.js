const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');

const { getAllTasksModel } = require('../../models');

describe('List all tasks stored in the database', function () {
  let connectionMock;
//   const payloadMovie = {
//     _id: '620bfe792478a3ef3f2ee977',
//     name: 'Teste',
//     createdAt: '2022-01-01T03:00:00.000Z',
//     status: 'pendente',
//   };

      before(async function () {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      });

      after(async function () {
        // await connectionMock.db('desafioEbytr').collection('tasks').drop();
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