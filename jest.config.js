export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["api/**/*.js", "rides/**/*.js"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  coverageReporters: ["cobertura", "text", "lcov"],

  reporters: [
    "default",
    ["jest-junit", { outputDirectory: ".", outputName: "junit.xml" }]
  ],

  setupFiles: ["./jest.setup.js"],

  testEnvironment: "jsdom",

  // 👉 IGNORAR PLAYWRIGHT
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/e2e/"
  ],

  // 👉 TRATAR .js COMO ESM
  //extensionsToTreatAsEsm: [".js"],

  // 👉 USAR BABEL PARA TRANSFORMAR ES MODULES
  transform: {
    "^.+\\.js$": ["babel-jest", { presets: ["@babel/preset-env"] }]
  }
};
