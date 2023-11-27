import Dexie, { Table } from 'dexie';
import { CSSProperties } from 'react';

export interface Workspace {
  id: number;
  name: string;
}

export interface Flag {
  id?: number;
  name: string;
  priority: number;
  color?: CSSProperties['backgroundColor'];
}

export interface Todo {
  id?: number;
  workspace_id?: number | null;
  text: string;
  tags?: string[];
  customOrder?: number | null;
  createdAt: number | null;
  updatedAt?: number | null;
  completedAt?: number | null;
}

export class CustomDexie extends Dexie {
  workspaces!: Table<Workspace>;
  flags!: Table<Flag>;
  todos!: Table<Todo>;

  constructor() {
    super('codedino_db');
    this.version(1).stores({
      // bookmarks: '',
      workspaces: '++id, name',
      flags: '++id, priority, name, color',
      todos:
        '++id, workspace_id, category_id, text, tags, customOrder, createdAt, deletedAt, completedAt',
    });
  }
}

export const db = new CustomDexie();
