import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getDatabase, ref, set, get, update, remove, onValue, DatabaseReference, query, orderByChild, equalTo } from "firebase/database";
import { firebaseConfig } from './fire-baseCredentials';


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export function updateUserData(userId: string, data: Record<string, any>) {
  return update(ref(database, 'users/' + userId), data);
}

export function writeUserData(userId: string, name: string, email: string) {
  return set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    isOnline: true,
    lastActive:Date.now()
  });
}

export function setUserOnlineStatus(userId: string, status: boolean) {
  const userStatusDatabaseRef = ref(database, `users/${userId}`);
  const statusData = {
    isOnline: status,
    lastActive: Date.now(),
  };
  return update(userStatusDatabaseRef, statusData);
}

export function setUserOfflineStatus(userId: string) {
  const userStatusDatabaseRef = ref(database, `users/${userId}`);
  const statusData = {
    isOnline: false,
    lastActive: Date.now(),
  };
  return update(userStatusDatabaseRef, statusData);
}

export function handleUserPresence(userId: string) {
  const userStatusDatabaseRef = ref(database, `/users/${userId}/status`);
  const isOfflineForDatabase = {
    state: 'offline',
    last_changed: Date.now(),
  };
  const isOnlineForDatabase = {
    state: 'online',
    last_changed: Date.now(),
  };
}

export function getOnlineUsers(callback: (onlineUsers: any) => void) {
  const onlineUsersQuery = query(ref(database, 'users'), orderByChild('isOnline'), equalTo(true));
  
  onValue(onlineUsersQuery, (snapshot) => {
    const onlineUsers = snapshot.val();
    callback(onlineUsers); // Return the list of online users
  });
}





export function readUserData(userId: string) {
  const userRef = ref(database, 'users/' + userId);
  return get(userRef);
}

export function removeUserData(userId: string) {
  return remove(ref(database, 'users/' + userId));
}

export function subscribeToUserData(userId: string, callback: (data: any) => void) {
  const userRef = ref(database, 'users/' + userId);
  onValue(userRef, (snapshot) => {
    callback(snapshot.val());
  });
}

export { auth };
export default app;
