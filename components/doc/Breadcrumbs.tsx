import type React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

interface BreadcrumbsProps {
  crumbs: Array<{ title: string; route: string }>
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <ul className="flex h-12">
      {crumbs.map((c, i) => (
        <li key={i} className={cn('flex items-center text-theme-500')}>
          <Link href={c.route}>
            <a
              className={cn(
                'px-1 rounded-md uppercase font-medium',
                'hover:bg-theme-500/10'
              )}>
              {c.title}
            </a>
          </Link>
          {i !== crumbs.length - 1 && (
            <FaChevronRight className={cn('inline text-xs')} />
          )}
        </li>
      ))}
    </ul>
  )
}
