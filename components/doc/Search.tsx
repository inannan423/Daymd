import type React from 'react'
import { useId } from 'react'
import cn from 'classnames'
import { IoSearchSharp } from 'react-icons/io5'

export const Search: React.FC = () => {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn('relative', 'text-gray-400 dark:text-gray-600')}>
      <input
        id={id}
        type="text"
        name="search"
        placeholder="Search text..."
        className={cn(
          'peer pl-8 py-1.5 w-full text-base rounded-md',
          'shadow-inner-light dark:shadow-inner-dark',
          'text-black dark:text-white',
          'placeholder:italic placeholder:font-light',
          'focus:outline-none focus:ring-[0.15rem] focus:ring-theme-500 dark:focus:ring-theme-500',
          'bg-gray-200/60 dark:bg-gray-800/60'
        )}
      />
      <span
        className={cn(
          'absolute left-2.5 inset-y-0 flex items-center',
          'peer-focus:text-gray-900 dark:peer-focus:text-white'
        )}>
        <IoSearchSharp />
      </span>
      <span
        className={cn(
          'absolute right-2.5 inset-y-0 flex items-center space-x-1.5 text-xs opacity-60'
        )}>
        <kbd
          className={cn(
            'px-1.5 rounded-md border-[0.1rem]',
            'border-gray-400 dark:border-gray-600'
          )}>
          ⌘ K
        </kbd>
      </span>
    </label>
  )
}
