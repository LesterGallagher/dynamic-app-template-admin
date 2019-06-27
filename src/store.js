import { applyMiddleware, createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore' // <- needed if using firestore
import firebase from './lib/firebase';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise, thunk, logger);

const rmUndefined = obj => Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : '');

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    profileFactory: (userData, profileData) => {
        const { user } = userData;
        console.log('USERDATA', userData)
        return {
            public: {
                ...rmUndefined(user)
            }
        }
    }
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Add reactReduxFirebase enhancer when making store creator
export const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

export default createStoreWithFirebase(reducer, middleware);
