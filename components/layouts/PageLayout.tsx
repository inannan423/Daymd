import type React from 'react'
import cn from 'classnames'

import { MadeBy, Logo, Navigation } from '@/components/app'

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div
      className={cn(
        'grow flex flex-col w-screen h-screen z-10 overflow-auto',
        'bg-white dark:bg-gray-900/50'
      )}>
      <header className={cn('flex items-center px-8 py-4 space-x-8')}>
        <Logo />
        <Navigation />
      </header>
      {children}
      <footer className={cn('flex flex-col items-center px-8 py-4')}>
        <MadeBy />
      </footer>
    </div>
  )
}
