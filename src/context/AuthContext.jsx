import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../services/connectFirebase';
import { doc, getDoc } from 'firebase/firestore';
import { Loading } from '../components/Loading';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null); 
  const [ role, setRole ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async(firebaseUser) => { // Lắng nghe sự thay đổi của trạng thái đăng nhập
        if(firebaseUser) {
          const ref = doc(db, "users", firebaseUser.uid); 
          const snap = await getDoc(ref);
          if(snap.exists()) {
            const data = snap.data();
            setUser(firebaseUser);
            setRole(data.role);
          } else {
            setUser(firebaseUser);
            setRole(null);
          }
        }
        else {
          setUser(null);
          setRole(null);
        }
        setLoading(false);
    });
    return () => unsub(); // Hủy bỏ listener khi component unmount
  }, [])

  const logout = () => signOut(auth); // Hàm đăng xuất, có thể sử dụng ở bất kỳ component nào thông qua useAuth()

  if(loading) return <Loading/>
  return (
    <AuthContext.Provider value={{ user, role, loading, logout }}  >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
