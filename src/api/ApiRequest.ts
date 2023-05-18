import { ApiClient } from './ApiClient';

export enum ApiRequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class ApiRequest<P, R> extends ApiClient {
  private path: string

  private input?: P

  private method?: ApiRequestMethod

  constructor(path: string) {
    super();
    this.path = path;
  }

  setMethod(method: ApiRequestMethod) {
    this.method = method;
    return this;
  }

  /** Set the input parameters for the request (optional) */
  setInput(input: P) {
    this.input = input;
    return this;
  }

  dispatch() {
    if (this.method === ApiRequestMethod.POST) {
      return this.post();
    }
    if (this.method === ApiRequestMethod.PATCH) {
      return this.patch();
    }
    if (this.method === ApiRequestMethod.DELETE) {
      return this.delete();
    }
    return this.get();
  }

  private get() {
    return this.client.get(this.path, {
      params: this.input,
    });
  }
}
