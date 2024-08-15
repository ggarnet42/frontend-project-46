import yaml from 'js-yaml';
import path from 'path';

const extractFormat = (filename) => path.extname(filename).slice(1);

const parsers = (format, file) => {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
    case 'yml':
      return yaml.load(file);
    default:
      throw new Error(`Неизвестный формат: ${format}`);
  }
};

export { parsers, extractFormat };
