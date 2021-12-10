// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAeQShDZg2RufiDYCNU2sjhP_h7OjA8mcc",
    authDomain: "adminnotificaciones.firebaseapp.com",
    projectId: "adminnotificaciones",
    storageBucket: "adminnotificaciones.appspot.com",
    messagingSenderId: "621272075990",
    appId: "1:621272075990:web:23fca6230f3ece9e290377",
    measurementId: "${config.measurementId}"
  },
  gcm_sender_id: "103953800507"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
