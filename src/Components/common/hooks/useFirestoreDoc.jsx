import { useEffect, useState } from 'react';
import { getDocsFromCollection } from '../utils/firebaseHelper';

const useFirestoreDoc = ({ sortBy, collectionName }) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocsFromCollection({
      collectionName,
      sortByField: sortBy,
    }).then((docs) => {
      setDocs(docs);
    });
  }, [sortBy, collectionName]);

  return { docs };
};

export default useFirestoreDoc;
