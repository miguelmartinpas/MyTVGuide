import firebase from 'firebase';
import config from '../config';

class Firebase {
    private firebaseApp: any;

    public constructor(defautAuth) {
        this.firebaseApp = firebase.initializeApp(config.firebaseConfig);
    }

    public emailAndPasswordAuth = async (user: string, pass: string): any => {
        const auth = await this.firebaseApp.auth().signInWithEmailAndPassword(user, pass);
        return auth;
    };

    public anonymouslyAuth = async (): any => {
        const auth = await this.firebaseApp.auth().signInAnonymously();
        return auth;
    };

    public getToken = async (): any => {
        const idToken = await this.firebaseApp.auth().currentUser.getIdToken();
        return idToken;
    };

    public getEmailAndPasswordToken = async (user: string, pass: string): any => {
        await this.emailAndPasswordAuth(user, pass);
        const token = await this.getToken();
        return token;
    };

    public getAnonymouslyToken = async (): any => {
        await this.anonymouslyAuth();
        const token = await this.getToken();
        return token;
    };


}

export default new Firebase();
