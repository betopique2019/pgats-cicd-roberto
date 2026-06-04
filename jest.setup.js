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

// Polyfill de fetch para ambiente JSDOM
import 'whatwg-fetch';
