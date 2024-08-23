'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Nav(){
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-6'>
      <Link href="/dashboard" passHref>
        <div className={`text-slate-900 font-normal text-base ${pathname === '/dashboard' ? 'font-semibold' : ''}`}>
          Dashboard
        </div>
      </Link>
      <Link href="/records" passHref>
        <div className={`text-slate-900 font-normal text-base ${pathname === '/records' ? 'font-semibold' : ''}`}>
          Records
        </div>
      </Link>
    </nav>
  );
};
