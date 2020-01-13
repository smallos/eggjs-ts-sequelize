// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAppOneOne from '../../../app/model/app_one/one';
import ExportAppTwoTwo from '../../../app/model/app_two/two';

declare module 'egg' {
  interface IModel {
    AppOne: {
      One: ReturnType<typeof ExportAppOneOne>;
    }
    AppTwo: {
      Two: ReturnType<typeof ExportAppTwoTwo>;
    }
  }
}
