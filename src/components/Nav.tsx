'use client'

import { cn } from '@/lib/utils'
import { CloudCog } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

export default function Nav() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav className={cn('flex gap-8')}>
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={cn(
              'font-medium capitalize transition-all hover:text-accent',
              {
                'border-b-2 border-accent text-accent': link.path === pathname,
              }
            )}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
