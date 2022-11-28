import { forwardRef } from 'react'
import clsx from 'clsx'

// export function EmptyBox({children}: {children: any, style?: any, ref?: any, className?: string}) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

export const EmptyBox = forwardRef(function EmptyBox(
  { className, children, ...props }: {className?: string, children: JSX.Element, style?: any, ref?: any},
  ref
) {
  return (
    <div
      ref={ref as any}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      {children}
    </div>
  )
})