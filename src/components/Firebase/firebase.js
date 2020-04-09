import App from "../../App";
import app from "firebase";
import 'firebase/auth'
const fconfig = {
    apiKey: "AIzaSyDhkfwpL0auu8aXX05ld5NJFF4jgFn_wOc",
    authDomain: "login-auth-a94dc.firebaseapp.com",
    databaseURL: "https://login-auth-a94dc.firebaseio.com",
    projectId: "login-auth-a94dc",
    storageBucket: "login-auth-a94dc.appspot.com",
    messagingSenderId: "733996694716",
    };
    const config = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      };
const prodConfig = {
    apiKey: "AIzaSyDhkfwpL0auu8aXX05ld5NJFF4jgFn_wOc",
    authDomain: "login-auth-a94dc.firebaseapp.com",
    databaseURL: "https://login-auth-a94dc.firebaseio.com",
    projectId: "login-auth-a94dc",
    storageBucket: "login-auth-a94dc.appspot.com",
    messagingSenderId: "733996694716",
    };
    const devConfig = {
        apiKey: "AIzaSyDhkfwpL0auu8aXX05ld5NJFF4jgFn_wOc",
        authDomain: "login-auth-a94dc.firebaseapp.com",
        databaseURL: "https://login-auth-a94dc.firebaseio.com",
        projectId: "login-auth-a94dc",
        storageBucket: "login-auth-a94dc.appspot.com",
        messagingSenderId: "733996694716",
        };

//const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
    class Firebase{
        constructor(){
          
            app.initializeApp(config);
            this.auth = app.auth();
            this.db=app.database();
            this.googleProvider = new app.auth.GoogleAuthProvider();
        }
        doCreateUserWithEmailAndPassword=(email,password) =>
        this.auth.createUserWithEmailAndPassword(email,password);

        doSignInWithEmailAndPassword=(email,password)=>
        this.auth.signInWithEmailAndPassword(email,password);

        doSignOut=()=>this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);



        doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
        }

    export default Firebase

