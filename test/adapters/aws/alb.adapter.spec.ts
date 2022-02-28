import type { ALBEvent, ALBResult } from 'aws-lambda';
import { AlbAdapter } from '../../../src/v2/adapters/aws';
import {
  DelegatedResolver,
  GetResponseAdapterProps,
} from '../../../src/v2/contracts';
import {
  ILogger,
  getEventBodyAsBuffer,
  getFlattenedHeadersMap,
  getMultiValueHeadersMap,
  getPathWithQueryStringParams,
} from '../../../src/v2/core';
import { createCanHandleTestsForAdapter } from '../utils/can-handle';
import {
  createAlbEvent,
  createAlbEventWithMultiValueHeaders,
} from './utils/alb-event';

describe(AlbAdapter.name, () => {
  let adapter!: AlbAdapter;

  beforeEach(() => {
    adapter = new AlbAdapter();
  });

  describe('getAdapterName', () => {
    it('should be the same name of the class', () => {
      expect(adapter.getAdapterName()).toBe(AlbAdapter.name);
    });
  });

  createCanHandleTestsForAdapter(() => new AlbAdapter(), undefined);

  describe('getRequest', () => {
    it('should return the correct mapping for the request', () => {
      const method = 'PUT';
      const path = '/events';
      const body = { name: 'H4ad Event' };

      const event = createAlbEvent(method, path, body);

      expect(event.headers).toHaveProperty('x-forwarded-for');
      expect(event.headers!['x-forwarded-for']).not.toBeInstanceOf(Array);

      const result = adapter.getRequest(event);

      const remoteAddress = event.headers!['x-forwarded-for'];

      expect(result).toHaveProperty('method', method);

      expect(result).toHaveProperty('headers');
      expect(result.headers).toHaveProperty('x-forwarded-for');
      expect(result.headers['x-forwarded-for']).not.toBeInstanceOf(Array);

      expect(result).toHaveProperty('body');
      expect(result.body).toBeInstanceOf(Buffer);

      const [bodyBuffer, contentLength] = getEventBodyAsBuffer(
        JSON.stringify(body),
        false,
      );
      expect(result.body).toStrictEqual(bodyBuffer);
      expect(result.headers).toHaveProperty('content-length');
      expect(result.headers['content-length']).toBe(String(contentLength));

      expect(result).toHaveProperty('remoteAddress', remoteAddress);

      const resultPath = getPathWithQueryStringParams(
        path,
        event.queryStringParameters,
      );
      expect(result).toHaveProperty('path', resultPath);
    });

    it('should return the correct mapping for the request with multi value headers', () => {
      const method = 'POST';
      const path = '/events';
      const body = { name: 'H4ad Event' };

      const event = createAlbEventWithMultiValueHeaders(method, path, body);

      expect(event.multiValueHeaders).toHaveProperty('x-forwarded-for');
      expect(event.multiValueHeaders!['x-forwarded-for']).toBeInstanceOf(Array);

      const result = adapter.getRequest(event);

      const remoteAddress = event.multiValueHeaders!['x-forwarded-for']![0];

      expect(result).toHaveProperty('method', method);

      expect(result).toHaveProperty('headers');
      expect(result.headers).toHaveProperty('x-forwarded-for');
      expect(result.headers['x-forwarded-for']).not.toBeInstanceOf(Array);

      expect(result).toHaveProperty('body');
      expect(result.body).toBeInstanceOf(Buffer);

      const [bodyBuffer, contentLength] = getEventBodyAsBuffer(
        JSON.stringify(body),
        false,
      );
      expect(result.body).toStrictEqual(bodyBuffer);
      expect(result.headers).toHaveProperty('content-length');
      expect(result.headers['content-length']).toBe(String(contentLength));

      expect(result).toHaveProperty('remoteAddress', remoteAddress);

      const resultPath = getPathWithQueryStringParams(
        path,
        event.multiValueQueryStringParameters,
      );
      expect(result).toHaveProperty('path', resultPath);
    });

    it('should return the correct mapping for the request when it has no body', () => {
      const method = 'POST';
      const path = '/events';
      const body = undefined;

      const event = createAlbEvent(method, path, body);
      const result = adapter.getRequest(event);

      const remoteAddress = event.headers!['x-forwarded-for'];

      expect(result).toHaveProperty('method', method);

      expect(result).toHaveProperty('headers');
      expect(result.headers).toHaveProperty('x-forwarded-for');
      expect(result.headers['x-forwarded-for']).not.toBeInstanceOf(Array);

      expect(result).toHaveProperty('body');
      expect(result.body).not.toBeInstanceOf(Buffer);
      expect(result.body).toBeUndefined();

      expect(result.headers).toHaveProperty('content-length');
      expect(result.headers['content-length']).toBe(
        event.headers!['content-length'],
      );

      expect(result).toHaveProperty('remoteAddress', remoteAddress);

      const resultPath = getPathWithQueryStringParams(
        path,
        event.queryStringParameters,
      );
      expect(result).toHaveProperty('path', resultPath);
    });

    it('should return the correct mapping for the request when send stripBasePath', () => {
      const stripBasePath = '/prod';

      const method = 'PUT';
      const path = '/prod/events';
      const body = { name: 'H4ad Event' };

      const strippedAdapter = new AlbAdapter({ stripBasePath });

      const event = createAlbEvent(method, path, body);

      expect(event.headers).toHaveProperty('x-forwarded-for');
      expect(event.headers!['x-forwarded-for']).not.toBeInstanceOf(Array);

      const result = strippedAdapter.getRequest(event);

      const remoteAddress = event.headers!['x-forwarded-for'];

      expect(result).toHaveProperty('method', method);

      expect(result).toHaveProperty('headers');
      expect(result.headers).toHaveProperty('x-forwarded-for');
      expect(result.headers['x-forwarded-for']).not.toBeInstanceOf(Array);

      expect(result).toHaveProperty('body');
      expect(result.body).toBeInstanceOf(Buffer);

      const [bodyBuffer, contentLength] = getEventBodyAsBuffer(
        JSON.stringify(body),
        false,
      );
      expect(result.body).toStrictEqual(bodyBuffer);
      expect(result.headers).toHaveProperty('content-length');
      expect(result.headers['content-length']).toBe(String(contentLength));

      expect(result).toHaveProperty('remoteAddress', remoteAddress);

      const resultPath = getPathWithQueryStringParams(
        path.replace(stripBasePath, ''),
        event.queryStringParameters,
      );
      expect(result).toHaveProperty('path', resultPath);
    });
  });

  describe('getResponse', () => {
    it('should return the correct mapping for the response', () => {
      const method = 'PUT';
      const path = '/events';
      const requestBody = { name: 'H4ad Event' };

      const resultBody = '{"success":true}';
      const resultStatusCode = 200;
      const resultIsBase64Encoded = false;

      const event = createAlbEvent(method, path, requestBody);
      const responseHeaders = getFlattenedHeadersMap(event.headers!);

      const result = adapter.getResponse({
        event,
        headers: responseHeaders,
        body: resultBody,
        log: {} as ILogger,
        isBase64Encoded: resultIsBase64Encoded,
        statusCode: resultStatusCode,
      });

      expect(result).toHaveProperty('statusCode', 200);
      expect(result).toHaveProperty('body', resultBody);
      expect(result).toHaveProperty('headers', responseHeaders);
      expect(result).toHaveProperty('multiValueHeaders', undefined);
      expect(result).toHaveProperty('isBase64Encoded', resultIsBase64Encoded);
    });

    it('should return the correct mapping for the response with multi value headers', () => {
      const method = 'PUT';
      const path = '/events';
      const requestBody = { name: 'H4ad Event' };

      const resultBody = '{"success":true}';
      const resultStatusCode = 200;
      const resultIsBase64Encoded = false;

      const event = createAlbEventWithMultiValueHeaders(
        method,
        path,
        requestBody,
      );
      const responseHeaders = getFlattenedHeadersMap(event.multiValueHeaders!);
      const responseMultiValueHeaders =
        getMultiValueHeadersMap(responseHeaders);

      const result = adapter.getResponse({
        event,
        headers: responseHeaders,
        body: resultBody,
        log: {} as ILogger,
        isBase64Encoded: resultIsBase64Encoded,
        statusCode: resultStatusCode,
      });

      expect(result).toHaveProperty('statusCode', 200);
      expect(result).toHaveProperty('body', resultBody);
      expect(result).toHaveProperty('headers', undefined);
      expect(result).toHaveProperty(
        'multiValueHeaders',
        responseMultiValueHeaders,
      );
      expect(result).toHaveProperty('isBase64Encoded', resultIsBase64Encoded);
    });
  });

  describe('onErrorWhileForwarding', () => {
    it('should resolver call succeed', () => {
      const method = 'GET';
      const path = '/events';
      const requestBody = undefined;

      const event = createAlbEventWithMultiValueHeaders(
        method,
        path,
        requestBody,
      );

      const log = {} as ILogger;

      const resolver: DelegatedResolver<ALBResult> = {
        fail: jest.fn(),
        succeed: jest.fn(),
      };

      const respondWithErrors = true;
      const error = new Error('Test error');

      const oldGetResponse = adapter.getResponse.bind(adapter);

      let getResponseResult: ALBResult | undefined;

      adapter.getResponse = jest.fn(
        (params: GetResponseAdapterProps<ALBEvent>) => {
          expect(params.event).toBe(event);
          expect(params.statusCode).toBe(500);
          expect(params.body).toBe(error.stack);
          expect(params.isBase64Encoded).toBe(false);
          expect(params.log).toBe(log);
          expect(params.headers).toStrictEqual({});

          getResponseResult = oldGetResponse(params);

          return getResponseResult;
        },
      );

      adapter.onErrorWhileForwarding({
        event,
        log,
        delegatedResolver: resolver,
        respondWithErrors,
        error,
      });

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(adapter.getResponse).toHaveBeenCalledTimes(1);

      expect(resolver.fail).toHaveBeenCalledTimes(0);
      expect(resolver.succeed).toHaveBeenCalledTimes(1);

      expect(resolver.succeed).toHaveBeenCalledWith(getResponseResult);
    });

    it('should resolver call succeed but without sending errors', () => {
      const method = 'GET';
      const path = '/events';
      const requestBody = undefined;

      const event = createAlbEventWithMultiValueHeaders(
        method,
        path,
        requestBody,
      );

      const log = {} as ILogger;

      const resolver: DelegatedResolver<ALBResult> = {
        fail: jest.fn(),
        succeed: jest.fn(),
      };

      const respondWithErrors = false;
      const error = new Error('Test error without sending this error');

      const oldGetResponse = adapter.getResponse.bind(adapter);

      let getResponseResult: ALBResult | undefined;

      adapter.getResponse = jest.fn(
        (params: GetResponseAdapterProps<ALBEvent>) => {
          expect(params.event).toBe(event);
          expect(params.statusCode).toBe(500);
          expect(params.body).not.toBe(error.stack);
          expect(params.body).toStrictEqual('');
          expect(params.isBase64Encoded).toBe(false);
          expect(params.log).toBe(log);
          expect(params.headers).toStrictEqual({});

          getResponseResult = oldGetResponse(params);

          return getResponseResult;
        },
      );

      adapter.onErrorWhileForwarding({
        event,
        log,
        delegatedResolver: resolver,
        respondWithErrors,
        error,
      });

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(adapter.getResponse).toHaveBeenCalledTimes(1);

      expect(resolver.fail).toHaveBeenCalledTimes(0);
      expect(resolver.succeed).toHaveBeenCalledTimes(1);

      expect(resolver.succeed).toHaveBeenCalledWith(getResponseResult);
    });
  });
});
