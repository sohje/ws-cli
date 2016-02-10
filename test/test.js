const execFile = require('child_process').execFile;
const assert = require('assert');

describe('Ws-cli', function() {
  it('Should not throw error', function(done) {
    execFile('node', ['./cli.js'], (err, stdout) => {
        assert.equal(null, err)
        assert.equal('string', typeof stdout)
        done();
    });
  });
});

