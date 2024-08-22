import yaml from 'js-yaml';
import path from 'path';

const extractFormat = (filename) => path.extname(filename).slice(1);

const parsers = (format, file) => {
  try {
    switch (format) {
      case 'json':
        return JSON.parse(file);
      case 'yaml':
      case 'yml':
        return yaml.load(file);
      default:
        throw new Error(`Неизвестный формат: ${format}`);
    }
  } catch (error) {
    throw new Error(`Ошибка при парсинге ${format}: ${error.message}`);
  }
};

export { parsers, extractFormat };
