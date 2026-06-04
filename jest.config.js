export default {
  clearMocks: true,

  // 👉 ATIVAR COLETA DE COBERTURA
  collectCoverage: true,

  // 👉 AGORA APONTANDO PARA OS ARQUIVOS REAIS DO PROJETO (dentro de src/)
  collectCoverageFrom: [
    "src/components/**/*.js",
    "src/services/**/*.js",
    "src/pipes/**/*.js",
    "src/router.js"
  ],

  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // 👉 GERAR COBERTURA NO FORMATO QUE O AZURE DEVOPS LÊ
  coverageReporters: ["cobertura", "text", "lcov"],

  // 👉 GERAR ARQUIVO junit.xml PARA A PIPELINE
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: ".", outputName: "junit.xml" }]
  ],

  // 👉 CARREGAR CONFIGURAÇÕES ANTES DOS TESTES
  setupFiles: ["./jest.setup.js"],

  // 👉 AMBIENTE DE TESTE
  testEnvironment: "jsdom",

  // 👉 IGNORAR TESTES E2E DO PLAYWRIGHT
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/e2e/"
  ],

  // 👉 TRANSFORMAR TODO O CÓDIGO COM BABEL (ESSENCIAL PARA COBERTURA)
  transform: {
    "^.+\\.js$": ["babel-jest", { presets: ["@babel/preset-env"] }]
  },

  // 👉 NÃO IGNORAR NADA NA TRANSFORMAÇÃO
  transformIgnorePatterns: []
};