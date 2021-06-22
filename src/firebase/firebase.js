import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_tZK4SCIwmMb-dfOdAmhemopej9zJL-g",
    authDomain: "bazar-3f659.firebaseapp.com",
    databaseURL: "https://bazar-3f659-default-rtdb.firebaseio.com",
    projectId: "bazar-3f659",
    storageBucket: "bazar-3f659.appspot.com",
    messagingSenderId: "654208499358",
    appId: "1:654208499358:web:542aa7a5933b767ee0c58f"
};

firebase.initializeApp(config);



//   export const AddCollectionAndDoc=async (collectionKey,objectADD)=>{
//     const collectionRef=firestore.collection(collectionKey)
  
         
//     const batch=firestore.batch()
//     objectADD.forEach(obj => {
//       const newDocRef=collectionRef.doc()
  
//     batch.set(newDocRef,obj)
  
//   })
  
//   return await  batch.commit()
// }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
   
      return accumulator;
    }, {});
  };



  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;