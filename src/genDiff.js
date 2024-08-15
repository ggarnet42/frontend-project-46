import { parsers, extractFormat } from './parsers.js';
import diffTree from './diffTree.js';
import formatStyle from './formatters/index.js';

const genDiff = (filename1, filename2, formatName = 'stylish') => {
  const file1format = extractFormat(filename1);
  const file2format = extractFormat(filename2);
  const data1 = parsers(file1format, filename1);
  const data2 = parsers(file2format, filename2);
  const innerTree = diffTree(data1, data2);
  return formatStyle(innerTree, formatName);
};
export default genDiff;
