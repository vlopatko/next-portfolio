import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className={cn('py-8 text-white xl:py-12')}>
      <div
        className={cn('container mx-auto flex items-center justify-between')}
      >
        <Link href={'/'}>
          <h1 className={cn('text-4xl font-semibold')}>
            Valeriy<span className={cn('text-accent')}>.</span>
          </h1>
        </Link>

        {/* desktop nav & contact me button */}
        <div className={cn('hidden xl:flex')}>
          <Nav />
          <Link href={cn('/contact')}>
            <Button>Contact me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className={cn('items-center gap-8 xl:hidden')}>mobile nav</div>
      </div>
    </header>
  )
}
