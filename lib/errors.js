'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on berycore-p2p Module {0}'
};

module.exports = require('berycore-lib').errors.extend(spec);
