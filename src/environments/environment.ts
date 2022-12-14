// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  payloadKey: '57b0e476-142c-4762-8547-140b65cb1e9c',
  apis: {
    // imoveistock: 'http://ec2-34-201-150-233.compute-1.amazonaws.com:3000/',
    imoveistock: 'https://market-inkluziva.mustblockchain.com/imoveistock/',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
