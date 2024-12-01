module.exports = {
	root: true,
	extends: [
		"@react-native",
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "jest"],

	rules: {
		"no-console": "warn",
		quotes: [1, "double"],
		"@typescript-eslint/consistent-type-imports": ["error", {prefer: "type-imports"}],
	},
	overrides: [
		{
			// Test files only
			files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
			extends: ["plugin:testing-library/react"],
		},
	],
	ignorePatterns: ["jest.config.js", "babel.config.js", "metro.config.js"],
};
