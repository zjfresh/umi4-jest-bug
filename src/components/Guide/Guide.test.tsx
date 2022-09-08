import { render } from '@testing-library/react';

import Guide from './index';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('RemoteSelect unit test', () => {
  const Text = 'abc';

  test('渲染冒烟测试', async () => {
    const { container } = render(<Guide name={Text} />);
    expect(container).toMatchSnapshot();
  });
});
