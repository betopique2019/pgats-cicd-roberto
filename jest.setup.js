// Mock simples de localStorage para ambiente de testes
Object.defineProperty(global, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
  },
  writable: true
});

// Mock global fetch para testes
global.fetch = jest.fn();

// Mock global Response para testes
global.Response = class {
  constructor(body, init) {
    this.body = body;
    this.status = init?.status || 200;
  }

  async json() {
    return JSON.parse(this.body);
  }
};
