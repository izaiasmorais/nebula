export default {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx$": "ts-jest",
		"^.+\\.ts$": "ts-jest",
	},
	testEnvironment: "jest-environment-jsdom",
	testRegex: "(/__tests__/.*.(test|spec)).(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: false,
	collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
	coverageDirectory: "<rootDir>/coverage/",
	coveragePathIgnorePatterns: ["(tests/.*.mock).(jsx?|tsx?)$", "(.*).d.ts$"],
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
			"identity-obj-proxy",
	},
	verbose: true,
};
