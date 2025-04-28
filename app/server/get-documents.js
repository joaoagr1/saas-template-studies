import "server-only";

import { db, getDownloadURLFromPath } from "../lib/firebase";

export async function getDocumentsData() {
  const docs = db.collection("saved-images");

  const docsSnapshot = await docs.get();

  if (docsSnapshot.empty) {
    // Changed from exists to empty
    return undefined;
  }

  const allData = await Promise.all(
    docsSnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const uploadUrls = await Promise.all(
        data.uploadPaths.map(getDownloadURLFromPath)
      );
      return { ...data, uploadUrls };
    })
  );

  return allData; // Returning an array of all documents' data
}
