import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});