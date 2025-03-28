/* eslint-disable react-refresh/only-export-components */
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
     {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInputRoot.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInputIcon.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

function TextInputInput(props: TextInputInputProps) {
  return (
     <input 
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        {...props}
      />
  )
}

TextInputInput.displayName = 'TextInputInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}