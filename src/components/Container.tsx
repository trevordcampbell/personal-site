import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: {className?: string, children: JSX.Element},
  ref
) {
  return (
    <div ref={ref as any} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: {className?: string, children: JSX.Element},
  ref
) {
  return (
    <div
      ref={ref as any}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = Object.assign(
  forwardRef(function Container(
  
    {children, Outer, ...props}: {className?: string, children: any, style?: any, Outer?: any},
    ref: any,
    
  ) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }),
  {
    Outer: OuterContainer,
    Inner: InnerContainer
  }
)