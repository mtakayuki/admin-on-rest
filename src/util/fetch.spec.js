import assert from 'assert';
import { queryParameters } from './fetch';

describe('queryParameters', () => {
    it('should generate a query parameter', () => {
        const data = { foo: 'bar' };
        assert.equal(queryParameters(data), 'foo=bar');
    });

    it('should generate multiple query parameters', () => {
        const data = { foo: 'fooval', bar: 'barval' };
        assert.equal(queryParameters(data), 'foo=fooval&bar=barval');
    });

    it('should generate multiple query parameters with same key', () => {
        const data = { foo: ['bar', 'baz'] };
        assert.equal(queryParameters(data), 'foo=bar&foo=baz');
    });
});
