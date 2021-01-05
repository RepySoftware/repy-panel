// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3333',
  forceHttps: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaWdvcndmYW9ybyIsImEiOiJja2prZ2t1OHoyNG94MnVwOG1ucnBiNzE4In0.AG1W2NugAnzA5rIfNzab9g'
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
