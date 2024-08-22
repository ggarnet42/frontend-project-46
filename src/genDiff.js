import fs from 'fs';
import path from 'path';
import { parsers, extractFormat } from './parsers.js';
import diffTree from './diffTree.js';
import formatStyle from './formatters/index.js';

const genDiff = (filename1, filename2, formatName = 'stylish') => {
  const filePath1 = path.resolve(process.cwd(), filename1);
  const filePath2 = path.resolve(process.cwd(), filename2);
  const file1format = extractFormat(filename1);
  const file2format = extractFormat(filename2);
  const data1 = fs.readFileSync(filePath1, 'utf-8');
  const data2 = fs.readFileSync(filePath2, 'utf-8');
  const parsedData1 = parsers(file1format, data1);
  const parsedData2 = parsers(file2format, data2);
  const innerTree = diffTree(parsedData1, parsedData2);
  return formatStyle(innerTree, formatName);
};
export default genDiff;
