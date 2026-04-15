'use client';

import { useEffect } from 'react';

export default function AdminPageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide TabBar (it's the sibling of main in the locale layout)
    const tabBar = document.querySelector('nav.fixed.bottom-0') as HTMLElement;
    if (tabBar) tabBar.style.display = 'none';

    // Remove bottom padding from main
    const main = document.querySelector('main') as HTMLElement;
    if (main) main.style.paddingBottom = '0';

    return () => {
      if (tabBar) tabBar.style.display = '';
      if (main) main.style.paddingBottom = '';
    };
  }, []);

  return <>{children}</>;
}
