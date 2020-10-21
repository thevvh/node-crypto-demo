'use strict';

module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);

  router.post('/encrypt', controller.crypto.encrypt);
  router.post('/decrypt', controller.crypto.decrypt);
};
