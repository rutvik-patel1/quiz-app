import { initializeApp } from 'firebase/app';
import { getFirestore, collection,addDoc, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

  apiKey: "AIzaSyCD3L3f8_SvvWVtnpp0vq39vFk9aSxxGd0",

  authDomain: "vue-app-quiz.firebaseapp.com",

  databaseURL: "https://vue-app-quiz-default-rtdb.firebaseio.com",

  projectId: "vue-app-quiz",

  storageBucket: "vue-app-quiz.appspot.com",

  messagingSenderId: "9145811362",

  appId: "1:9145811362:web:e4ca10afca0f156c8232fb"

};

const fapp = initializeApp(firebaseConfig);
const db  = getFirestore(fapp);

export async function data(ids){
    
   
    // const mCollection = collection(db, ids);
    // const mSnapshot = await getDocs(mCollection);
    // const Messeges = mSnapshot.docs.map(doc => doc.data());
    // console.log(Messeges)
    // return Messeges;
  }


export async function addData(ids ,data){
  // const docRef = await addDoc(collection(db, ids),data);
  // console.log("Document written with ID: ", docRef.id);
}

export async function createRoom(id){
  // // console.log(id)
  // // const fapp = initializeApp(firebaseConfig);
  // // const db  = getFirestore(fapp);
  // //const tmp = new Date()
  // // //await db.doc(id).add({ msg:"welcome" , time: tmp.now()});
  // // const res = await db.collection("ff").add({ msg:"welcome" , time: tmp.now()});
  // const data = { msg:"welcome" , time: "titu"}
  // const docRef = await addDoc(collection(db,id.toString()),data);
  // console.log('Added document with ID: ', docRef.id);
  // console.log("created collection")
}

export async function ifExists(roomName){
  // // const snapshot = await ap.collection(roomName).getDocuments();
  // const mCollection = collection(db, roomName);
  // const snapshot = await getDocs(mCollection)
  // if (snapshot.docs.length == 0) {
  // //doesnt exist
  //    console.log("not exist")
  //   return false
  // }
  // else{
  //   console.log("yes exist you can chat")
  //   return true
  // }
}
