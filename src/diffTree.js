import _ from 'lodash';

const isObject = (value) => value !== null && typeof value === 'object';

const diffTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort((a, b) => a.localeCompare(b));
  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!Object.hasOwn(data1, key)) {
      return { key, value: value2, type: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: value1, type: 'deleted' };
    }
    if (isObject(value1) && isObject(value2)) {
      return { key, type: 'nested', children: diffTree(value1, value2) };
    }
    if (value1 !== value2) {
      return {
        key,
        value1,
        value2,
        type: 'changed',
      };
    }
    return { key, value: value1, type: 'unchanged' };
  });
};

export default diffTree;
