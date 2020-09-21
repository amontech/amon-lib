const fs = require('fs');
const path = require('path');
const jsonlint = require('jsonlint');

const JsonTest = {

  files: [],

  addFile(file) {
    JsonTest.files.push(file);
  },

  lint(content) {
    jsonlint.parse(content);
  },

  async getFiles() {
    return new Promise((resolve) => {
      fs.readdir(path.resolve(__dirname, '../lib/json'), (err, filenames) => {
        if (err) {
          return;
        }
        resolve(filenames);
      });
    });
  },

  async readFile(file) {
    return new Promise(async (resolve) => {
      fs.readFile(path.resolve(__dirname, '../lib/json/' + file), 'utf-8', (err, content) => {
        if (err) {
          return;
        }
        resolve(content);
      });
    });
  },

  async lintFiles() {

    const files = await JsonTest.getFiles();

    await Promise.all(files.map(async file => {

      const content = await JsonTest.readFile(file);
      JsonTest.addFile({name: file, content});
      JsonTest.lint(content);
      console.info(`json lint is good - ${file}`);

      return true;

    }));

  },

  async init() {

    await JsonTest.lintFiles();

    console.info('jsons are good :)');
  }
}
JsonTest.init();

