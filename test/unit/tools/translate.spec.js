const path = require('path');
const fs = require('fs');

const Translate = require('../../../tools/translations/translate');

const csvPath = './mocks/translations.csv';
const enTrad = require('./mocks/en.json');
const esTrad = require('./mocks/es.json');
const itaTrad = require('./mocks/ita.json');

const artefactsDir = path.resolve(__dirname, '.artefacts');

describe('Tools: Translation', () => {

  before(function() {
    try {
      fs.mkdirSync(artefactsDir);
    } catch(e) {}
  });

  it('Translate data', () => {

    const data = [["label","en","es","ita"],["WHITEPAPER","Whitepaper","Libro blanco",""],["TEAM.DANY.TITLE","CEO","Directoro",""],["EXAMPLE.FOR_SOMETHING","english","spanish",""]];
    const translations = Translate._translate(data);

    expect(translations.en).to.deep.eq(enTrad);
    expect(translations.es).to.deep.eq(esTrad);
    expect(translations.ita).to.deep.eq(itaTrad);

  });

  it('write files', () => {

    const data = { azer: 1, tyui: 2 };
    const outputDir = artefactsDir;

    Translate._writeTranslations(data, outputDir);

    expect(fs.existsSync(path.resolve(outputDir, 'azer.json'))).to.be.true;
    expect(fs.existsSync(path.resolve(outputDir, 'tyui.json'))).to.be.true;

    const azer = require(path.resolve(outputDir, 'azer.json'));
    const tyui = require(path.resolve(outputDir, 'tyui.json'));

    expect(azer).to.eq(1);
    expect(tyui).to.eq(2);

  });


  it('Translate all', () => {

    const outputDir = artefactsDir;
    const inputPath = path.resolve(__dirname, csvPath);
    Translate.translate(inputPath, outputDir);

    const en = require(path.resolve(outputDir, 'en.json'));
    expect(en).to.deep.eq(enTrad);

  });

});