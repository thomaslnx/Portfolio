const Configuration = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  formatter: '@commitlint/format',
  rules: {
    'subject-case': [2, 'never', 'upper-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'always', '.'],
    'type-case': [2, 'never', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test'],
    ],
  },

  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;
