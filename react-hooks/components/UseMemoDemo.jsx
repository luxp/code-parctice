import React, { useMemo, useState } from 'react'

export function UseMemoDemo() {
  let [a, setA] = useState(0)
  let [b, setB] = useState(1)
  let [c, setC] = useState(2)

  let memoValue = useMemo(() => {
    console.log('compute memoValue')
    return a.toString() + '__' + b.toString()
  }, [a, b])
  console.log('render')
  return (
    <div>
      <h2>UseMemo Demo</h2>
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
      <button
        onClick={() => {
          setC(Date.now())
        }}
      >
        setC
      </button>
      <div>memoValue: {memoValue}</div>
    </div>
  )
}
