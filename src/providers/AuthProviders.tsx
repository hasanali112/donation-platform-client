import app from "@/firebase/firebase.config";
import { ReactNode, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

type TContext = {
  user: FirebaseUser | null;
  userCreate: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  googleLoggedUser: () => Promise<UserCredential>;
  loading: boolean;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<TContext | null>(null);

const auth = getAuth(app);

const AuthProviders = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleLoggedUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userCreate = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name: string, photo: string) => {
    setLoading(true);
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } else {
      return Promise.reject("No user is currently signed in");
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      console.log(current);
      setUser(current);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userCreate,
    loginUser,
    updateUserProfile,
    googleLoggedUser,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
