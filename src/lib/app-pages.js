
import firebase from './firebase';
import uuidv4 from 'uuid/v4';

export const createDefaultAppPages = (appKey) => [
    createNewAppPage('Home', appKey, true)
];

export const createNewAppPage = (title, appKey, isHomePage = false) => {
    return {
        frontmatter: { title, icon: '' },
        rawDraftJSContentState: null,
        uid: firebase.auth().currentUser.uid,
        id: uuidv4(),
        appKey,
        isHomePage
    }
};
