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
    measurementId: "${config.measurementId}",
    vapidKey: "BEJ8zCfintR_3GQx_NL_m6SqlbSaqTdUeGTZkSR32MOfTw0F0nN_ZICfnx9sb_tPXkgjDCml7lBQjs8u4qwBLYo"
  },
  gcm_sender_id: "103953800507"
};

/* export const API_ENDPOINT = "https://dappapache02.eastus.cloudapp.azure.com/middleware2/api/v2/"; */

export const API_ENDPOINT =  'https://api.aviva.pe/middleware2/api/v2/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
