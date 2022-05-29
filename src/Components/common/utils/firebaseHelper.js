import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import firestore from 'firebaseConfig';

export const CollectionNames = {
  RESUME: 'resume',
  PROJECTS: 'projects',
  CONTACT_LINKS: 'contact_links',
};

const _getCollection = ({ collectionName, sortByField }) => {
  if (!!sortByField) {
    return query(collection(firestore, collectionName), orderBy(sortByField));
  }
  return collection(firestore, collectionName);
};

export const getDocsFromCollection = async ({
  collectionName,
  sortByField = false,
}) => {
  const collectionData = _getCollection({ collectionName, sortByField });
  const docsData = await getDocs(collectionData);
  return docsData.docs.map((doc) => doc.data());
};
