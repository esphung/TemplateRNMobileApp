import {jest} from "@jest/globals";

jest.mock("react-native-config", () => ({
	__esModule: true,
	default: {
		RN_NODE_ENV: "test",
	},
}));
