"use client";

import { FC, ReactNode, useEffect, useState } from "react";

interface ClientRenderProps {
  children: ReactNode;
}

// Workaround for Next error if you click layout quicker, then hydration happen
export const ClientRender: FC<ClientRenderProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
