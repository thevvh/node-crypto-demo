'use strict';

const {Controller} = require('egg');
const crypto = require('crypto');

class CryptoController extends Controller {
  async encrypt() {
    const {publicKey} = this.app.config;
    const encryptContent = crypto.publicEncrypt(publicKey, Buffer.from(this.ctx.request.body.content.toString(), 'utf8')).toString('base64');
    this.ctx.body = {
      res: encryptContent
    };
  }

  async decrypt() {
    const {privateKey} = this.app.config;
    const decryptContent = crypto.privateDecrypt(privateKey, Buffer.from(this.ctx.request.body.content, 'base64')).toString('utf8');
    this.ctx.body = {
      res: decryptContent
    };
  }
}

module.exports = CryptoController;
