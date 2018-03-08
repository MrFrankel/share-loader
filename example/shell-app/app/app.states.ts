import {AppComponent} from './app.component';
import {loadScript} from './sLoader';
import {App1Component} from './app1.component';


// This future state is a placeholder for all the lazy loaded Contacts states
// The Contacts NgModule isn't loaded until a Contacts link is activated
export const app1State = {
  name: 'app1',
  url: '/app1',
  component: App1Component
};

// This future state is a placeholder for all the lazy loaded Contacts states
// The Contacts NgModule isn't loaded until a Contacts link is activated
export const app2State = {
  name: 'ext.**',
  url: '/ext',
  loadChildren: () => {
    return loadScript('http://localhost:63342/my-external-app/dist/ext.js', 'extapp', 'ExtModule');
  }
};

export const APP_STATES = [
  app1State,
  app2State
];
//
// /**
//  * This is a home screen for authenticated users.
//  *
//  * It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
//  */
// export const homeState = {
//   parent: 'app',
//   name: 'home',
//   url: '/home',
//   component: HomeComponent,
// };
//
//
// /**
//  * This is the login state.  It is activated when the user navigates to /login, or if a unauthenticated
//  * user attempts to access a protected state (or substate) which requires authentication. (see routerhooks/requiresAuth.js)
//  *
//  * It shows a fake login dialog and prompts the user to authenticate.  Once the user authenticates, it then
//  * reactivates the state that the user originally came from.
//  */
// export const loginState = {
//   parent: 'app',
//   name: 'login',
//   url: '/login',
//   component: LoginComponent,
//   resolve: [
//     { token: 'returnTo', deps: [Transition], resolveFn: returnTo },
//   ]
// };
//
// /**
//  * A resolve function for 'login' state which figures out what state to return to, after a successful login.
//  *
//  * If the user was initially redirected to login state (due to the requiresAuth redirect), then return the toState/params
//  * they were redirected from.  Otherwise, if they transitioned directly, return the fromState/params.  Otherwise
//  * return the main "home" state.
//  */
// export function returnTo ($transition$: Transition): any {
//   if ($transition$.redirectedFrom() != null) {
//     // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
//     // Return to the original attempted target state (e.g., contacts)
//     return $transition$.redirectedFrom().targetState();
//   }
//
//   const $state = $transition$.router.stateService;
//
//   // The user was not redirected to the login state; they directly activated the login state somehow.
//   // Return them to the state they came from.
//   if ($transition$.from().name !== '') {
//     return $state.target($transition$.from(), $transition$.params('from'));
//   }
//
//   // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
//   return $state.target('home');
// }
//
// // This future state is a placeholder for all the lazy loaded Contacts states
// // The Contacts NgModule isn't loaded until a Contacts link is activated
// export const contactsFutureState = {
//   name: 'contacts.**',
//   url: '/contacts',
//   loadChildren: () => {
//     return loadScript('http://localhost:63342/angular2-starter-basic/dist/app2.js', 'App2Module');
//
//   }
// };
//
// // This future state is a placeholder for the lazy loaded Prefs states
// export const prefsFutureState = {
//   name: 'prefs.**',
//   url: '/prefs',
//   loadChildren: './prefs/prefs.module#PrefsModule'
// };
//
// // This future state is a placeholder for the lazy loaded My Messages feature module
// export const mymessagesFutureState = {
//   name: 'mymessages.**',
//   url: '/mymessages',
//   loadChildren: './mymessages/mymessages.module#MymessagesModule'
// };
//

//
//
// const _scriptCache = new Map();
//
// /**
//  * Load an external script.
//  *
//  * @param {string} url Absolute URL of script to load
//  * @param {string=} name Name of global variable that the script is expected to define
//  * @return {Promise}
//  */
// export function loadScript(url, name) {
//   let promise;
//
//   if(_scriptCache.has(url)) {
//     // TODO: normalize URL
//     promise = _scriptCache.get(url);
//   } else {
//     promise = new Promise((resolve,reject) => {
//       let script = document.createElement('script');
//       script.onerror = event => reject(new Error(`Failed to load '${url}'`));
//       script.onload = resolve;
//       script.async = true;
//       script.src = url;
//
//       if(document.currentScript) {
//         document.currentScript.parentNode.insertBefore(script, document.currentScript);
//       } else {
//         (document.head || document.getElementsByTagName('head')[0]).appendChild(script);
//       }
//     });
//
//     _scriptCache.set(url, promise);
//   }
//
//   return promise.then(() => {
//     if(global[name]) {
//       return global[name];
//     } else {
//       throw new Error(`"${name}" was not created by "${url}"`);
//     }``
//   });
// }