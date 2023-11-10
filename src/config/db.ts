import Dexie, { Table } from 'dexie';

export interface Workspace {
  id: number;
  name: string;
}

export interface Todo {
  id?: number;
  workspace_id?: number | null;
  text: string;
  tags?: string[];
  customOrder?: number | null;
  createdAt: number | null;
  updatedAt?: number | null;
  deletedAt?: number | null;
  completedAt?: number | null;
}

export class CustomDexie extends Dexie {
  workspaces!: Table<Workspace>;
  todos!: Table<Todo>;

  constructor() {
    super('codedino_db');
    this.version(1).stores({
      // bookmarks: '',
      workspaces: '++id, name',
      todos:
        '++id, workspace_id, text, tags, customOrder, createdAt, deletedAt, completedAt',
    });
  }
}

export const db = new CustomDexie();
