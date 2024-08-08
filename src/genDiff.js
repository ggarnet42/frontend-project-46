import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import diffTree from './diffTree.js';
import formatStyle from './formatters/index.js';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename.trim());

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const extractFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = extractFormat(filepath1);
  const file2format = extractFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = parsers(file1format, fileContent1);
  const data2 = parsers(file2format, fileContent2);
  const innerTree = diffTree(data1, data2);
  return formatStyle(innerTree, formatName);
};
export default genDiff;
