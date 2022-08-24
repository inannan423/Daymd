import type React from 'react'
import cn from 'classnames'

const getHeadingText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node.toLowerCase()

  if (typeof node === 'number') return node.toString()

  if (node instanceof Array)
    return node.map(getHeadingText).join('').toLowerCase()

  if (typeof node === 'object' && (node as any)?.props?.children)
    return getHeadingText(node as any).toLowerCase()

  return ''
}

const styles = {
  prefix: cn(
    'absolute -left-6 inset-y-0 flex items-center cursor-pointer text-transparent',
    'group-hover:text-gray-200 dark:group-hover:text-gray-700'
  ),
  heading: cn('group relative'),
}

export const H2: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const slug = getHeadingText(children)

  return (
    <h2 id={slug} className={styles.heading}>
      <span
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(styles.prefix, 'text-2xl')}>
        #
      </span>
      {children}
    </h2>
  )
}

export const H3: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const slug = getHeadingText(children)

  return (
    <h3 id={slug} className={styles.heading}>
      <span
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(styles.prefix, 'text-xl')}>
        #
      </span>
      {children}
    </h3>
  )
}

export const H4: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const slug = getHeadingText(children)

  return (
    <h4 id={slug} className={styles.heading}>
      <span
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(styles.prefix, 'text-lg')}>
        #
      </span>
      {children}
    </h4>
  )
}

export const H5: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const slug = getHeadingText(children)

  return (
    <h5 id={slug} className={styles.heading}>
      <span
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(styles.prefix, 'text-base')}>
        #
      </span>
      {children}
    </h5>
  )
}

export const H6: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const slug = getHeadingText(children)

  return (
    <h6 id={slug} className={styles.heading}>
      <span
        onClick={() => (window.location.hash = `#${slug}`)}
        className={cn(styles.prefix, 'text-sm')}>
        #
      </span>
      {children}
    </h6>
  )
}
