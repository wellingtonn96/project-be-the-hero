module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
		'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    'no-param-reassign': 'off'
	},
	env: {
		jest: true
	}
};
