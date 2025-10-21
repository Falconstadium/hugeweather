'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
