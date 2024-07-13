'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

export default function StairTransition() {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className='pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen'>
            <Stairs />
          </div>
        </div>
        StairTransition
      </AnimatePresence>
    </>
  )
}
