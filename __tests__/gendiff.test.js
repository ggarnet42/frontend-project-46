import fs from 'fs';
import genDiff from '../src/genDiff.js';
import getFixturePath from '../src/helper.js';

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('should return correct diff between two JSON files', () => {
  const getResultForStylish = readFile('resultForStylish.txt').trim();
  const getResultForPlain = readFile('resultForPlain.txt');
  const resultForStylish = genDiff('file1.json', 'file2.json', 'stylish');
  const resultResultForPlain = genDiff('file1.json', 'file2.json', 'plain');
  expect(resultForStylish).toEqual(getResultForStylish);
  expect(resultResultForPlain).toEqual(getResultForPlain);
});

test('should return correct diff between two yaml files', () => {
  const getResultForStylish = readFile('resultForStylish.txt').trim();
  const getResultForPlain = readFile('resultForPlain.txt');
  const resultForStylish = genDiff('file1.yaml', 'file2.yaml', 'stylish');
  const resultForPlain = genDiff('file1.yaml', 'file2.yaml', 'plain');
  expect(resultForStylish).toEqual(getResultForStylish);
  expect(resultForPlain).toEqual(getResultForPlain);
});

test('should return correct diff between JSON and yaml files', () => {
  const getResult = readFile('resultForJson.txt');
  const result = genDiff('file1.yaml', 'file2.json', 'json');
  expect(result).toEqual(getResult);
});
