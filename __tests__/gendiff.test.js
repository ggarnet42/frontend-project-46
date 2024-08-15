import fileURLToPath from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const firstFile = getFixturePath('file1.json');
const secondFile = getFixturePath('file2.json');
const getResultA = readFile('resultForStylish.txt').trim();
const getResultB = readFile('resultForPlain.txt');
const formatA = 'stylish';
const formatB = 'plain';
const resultA = genDiff(firstFile, secondFile, formatA);
const resultB = genDiff(firstFile, secondFile, formatB);
test('should return correct diff between two JSON files', () => {
  expect(resultA).toEqual(getResultA);
  expect(resultB).toEqual(getResultB);
});

const firstFile2 = getFixturePath('file1.yaml');
const secondFile2 = getFixturePath('file2.yaml');
const getResultC = readFile('resultForStylish.txt').trim();
const getResultD = readFile('resultForPlain.txt');
const formatC = 'stylish';
const formatD = 'plain';
const resultC = genDiff(firstFile2, secondFile2, formatC);
const resultD = genDiff(firstFile2, secondFile2, formatD);
test('should return correct diff between two yaml files', () => {
  expect(resultC).toEqual(getResultC);
  expect(resultD).toEqual(getResultD);
});

const firstFile3 = getFixturePath('file1.yaml');
const secondFile3 = getFixturePath('file2.json');
const getResult = readFile('resultForJson.txt');
const format = 'json';
const result = genDiff(firstFile3, secondFile3, format);
test('should return correct diff between JSON and yaml files', () => {
  expect(result).toEqual(getResult);
});
