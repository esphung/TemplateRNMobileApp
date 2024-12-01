/**
 * @format
 */

import React from "react";
import "react-native";
import App from "./App";

// Note: import explicitly to use the types shipped with jest.
import {describe, expect, it} from "@jest/globals";

// Note: test renderer must be required after react-native.
import {render} from "@testing-library/react-native";

describe("App", () => {
	it("renders correctly", () => {
		const {toJSON} = render(<App />);
		expect(toJSON()).toMatchSnapshot();
	});
});
