import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import Dexie from 'dexie';

export enum Stores {
  Bookmarks = 'bookmarks',
  Todos = 'todos',
  CodeSnippets = 'code_snippets',
}

export const IndexDbContext = createContext(null);

export const IndexDbProvider = ({ children }: { children: ReactNode }) => {
  const [initialized, setInitialized] = useState(false);
  let request = IDBOpenDBRequest;
  let db: IDBDatabase;
  let version = 1;

  const initDB = (): Promise<boolean> =>
    new Promise((resolve) => {
      request.prototype = indexedDB.open('codedino_db');

      request.prototype.onupgradeneeded = () => {
        db = request.prototype.result;
        console.log('request.onupgradeneeded:::', version);

        // if (!db.objectStoreNames.contains()) {
        // }
      };

      request.prototype.onsuccess = () => {
        db = request.prototype.result;
        version = db.version;
        console.log('request.onsuccess:::', version);
        resolve(true);
      };

      request.prototype.onerror = () => {
        resolve(false);
        console.log('request.onerror:::', version);
      };
    });

  useEffect(() => {}, []);

  return (
    <IndexDbContext.Provider value={null}>{children}</IndexDbContext.Provider>
  );
};
