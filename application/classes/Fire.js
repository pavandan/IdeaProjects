import firebase from "firebase";
import firebaseConfig from "./config"


// Initialize Firebase



class Fire {

    constructor() {
        firebase.initializeApp(firebaseConfig);
        console.log("------------------------------------------------firebaseconfig");
    }
    addPost = async ({ text, localUri })=> {
        const remoteUri = await this.uploadPhotoAsync(localUri);
        console.log( " local URI" +localUri);
        console.log("------------------------------------------------PROMISE")
        this.firestore
                .collection("Complaints")
                .add({
                    name: this.name,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri,
                    text
                });

    };
    uploadPhotoAsync = async uri =>{
        const path = 'photos' + this.uid + Date.now()+ '.jpg';
        return new Promise(async (res, rej)=> {
            const response = await fetch(uri);
            const file = await response.blob();
            let upload = firebase.storage.ref(path).put(file);
            upload.on("state_changed",snapshot => {}, err => {
                rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }

            )
        })
    };
    get firestore(){
        return firebase.firestore();
    }
    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
    get name(){
        return (firebase.auth().currentUser || {}).displayName;
    }

    get timestamp(){
        return Date().now();
    }


}
Fire.shared = new Fire();
export default Fire;
