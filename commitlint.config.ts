import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'convetional-changelog-atom',
  formatter: '@commitlint/formatt',
  rules: {
    'body-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      ['feat:', 'fix:', 'docs:', 'style:', 'refactor:', 'test:'],
    ],
    'type-case': [2, 'always', 'lower-case'],
  },
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,

  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;
