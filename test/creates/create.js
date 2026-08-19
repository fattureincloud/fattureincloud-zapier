require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - create', () => {
  zapier.tools.env.inject();

  it('should expose at least one valid create action', async () => {
    const createActions = Object.values(App.creates || {});

    createActions.length.should.be.above(0);
    createActions.forEach((action) => {
      action.should.have.property('operation');
      action.operation.should.have.property('perform');
      action.operation.perform.should.be.a.Function();
    });
  });
});
