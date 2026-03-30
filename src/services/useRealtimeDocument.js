import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./connectFirebase";

export const useRealtimeDocument = (collectionName, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionName || !id) return;

    const docRef = doc(db, collectionName, id);

    const unsub = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (err) => {
        console.error("Firestore error:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [collectionName, id]);

  return { data, setData, loading, error };
};