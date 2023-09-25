import { useState, useEffect, useRef } from 'react'

export function useEventListener(eventType: string, callback: any, element = window) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = (e: Event) => callbackRef.current(e)

    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

export function useMediaQuery(mediaQuery: any) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState<any>()

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)

    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])
  useEventListener('change', (e: any) => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}
