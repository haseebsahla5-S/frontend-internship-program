import '@testing-library/jest-dom/vitest';

// Node 25+ ships its own experimental localStorage global, which shadows jsdom's
// and is undefined without --localstorage-file. Always use jsdom's storage.
for (const name of ['localStorage', 'sessionStorage']) {
  Object.defineProperty(globalThis, name, {
    value: globalThis.jsdom.window[name],
    configurable: true,
    writable: true,
  });
}

// React Router builds a Node `Request` for every navigation, passing jsdom's AbortSignal,
// which Node's fetch rejects. Tests never abort navigations, so drop the signal.
const NodeRequest = globalThis.Request;
globalThis.Request = class extends NodeRequest {
  constructor(input, init) {
    if (init?.signal) {
      // eslint-disable-next-line no-unused-vars
      const { signal, ...rest } = init;
      super(input, rest);
    } else {
      super(input, init);
    }
  }
};
