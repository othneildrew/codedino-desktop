import { createContext, ReactNode, useContext } from 'react';

const WorkspaceContext = createContext<{ id: number; name: string } | null>(
  null
);

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => (
  <WorkspaceContext.Provider value={null}>{children}</WorkspaceContext.Provider>
);

export const useWorkspaceContext = () => useContext(WorkspaceContext);
