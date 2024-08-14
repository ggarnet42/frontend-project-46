import yaml from 'js-yaml';

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

export default parsers;
