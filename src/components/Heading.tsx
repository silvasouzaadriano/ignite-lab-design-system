import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';


export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = 'md', children, asChild, className}: HeadingProps) {
  const Tag =  asChild ? Slot: 'h2'
  return (
    <Tag className={clsx(
      'text-gray-100 font-bold font-sans', 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      },
      className
    )}>
      {children}
    </Tag>
  )
}