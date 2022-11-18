import '../styles/globals.css'
import { useEffect, useRef } from 'react'

import { Header } from '@/components/HeaderOriginal'
import { Footer } from '@/components/Footer'
import 'focus-visible'

function usePrevious(value: any) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: {Component: any, pageProps: any, router: any}) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="bg-white dark:bg-zinc-900">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
