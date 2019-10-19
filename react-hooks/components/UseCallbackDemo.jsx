import React, { useCallback, useState } from 'react'

let lastMemoCallback = null
export function UseCallbackDemo() {
  let [a, setA] = useState(0)
  let [b, setB] = useState(1)
  const memoizedCallback = useCallback(() => {}, [a])
  console.log(memoizedCallback === lastMemoCallback)
  lastMemoCallback = memoizedCallback
  return (
    <div>
      <h2>useCallback Demo</h2>
      <button
        onClick={() => {
          setA(Date.now())
        }}
      >
        setA
      </button>
      <button
        onClick={() => {
          setB(Date.now())
        }}
      >
        setB
      </button>
    </div>
  )
}
