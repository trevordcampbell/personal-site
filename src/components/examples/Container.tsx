import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: {className: string, children: JSX.Element},
  ref
) {
  return (
    <div ref={ref as any} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: {className: string, children: JSX.Element},
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

export const Container = forwardRef(function Container(
  {children, ...props}: {className?: string, children: any},
  ref
) {
  return (
    <OuterContainer className="" ref={ref} {...props}>
      <InnerContainer className="">{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
