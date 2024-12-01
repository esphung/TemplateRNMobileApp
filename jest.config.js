const {defaults: tsjPreset} = require("ts-jest/presets");

module.exports = {
	...tsjPreset,
	preset: "@testing-library/react-native",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
	transformIgnorePatterns: ["node_modules/(?!(react-native|@react-native/.+))"],
	setupFilesAfterEnv: ["@testing-library/react-native/extend-expect"],
	setupFiles: ["<rootDir>/__mocks__/setup.ts"],
	collectCoverage: true,
	coverageReporters: ["lcov", "html"],
	collectCoverageFrom: ["src/**/*.{ts,tsx}"],
	coveragePathIgnorePatterns: ["/node_modules/"],
	coverageThreshold: {
		"src/App.tsx": {
			statements: 100,
			branches: 50,
			functions: 100,
			lines: 100,
		},
	},
	transform: {
		"^.+\\.[jt]sx?$": "babel-jest",
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.jest.json",
			},
		],
	},
	modulePathIgnorePatterns: ["src/types"],
	testMatch: ["<rootDir>/**/*.test.ts?(x)"],
};
