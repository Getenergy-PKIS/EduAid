'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Using the pathname as a key forces a re-render when the route changes
  return <Navbar key={pathname} />;
}
