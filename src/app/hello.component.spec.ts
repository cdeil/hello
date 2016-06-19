import {beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {HelloAppComponent} from '../app/hello.component';

beforeEachProviders(() => [HelloAppComponent]);

describe('App: Hello', () => {
  it('should create the app',
     inject([HelloAppComponent], (app: HelloAppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'hello works!\'',
     inject([HelloAppComponent], (app: HelloAppComponent) => {
       expect(app.title).toEqual('hello works!');
     }));
});
