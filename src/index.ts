import mockFetch from './core/fetch';
import mock from './core/mock';

window.originFetch = window.fetch;

window.fetch = mockFetch;

window.mock = mock;

export { mock };
