import React, { useRef, useState, useDebugValue } from 'react'

export function UseRefDemo() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  let testRef = useRef(Math.random())
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputRef.current.focus()
    testRef.current = Math.random()
  }
  console.log(testRef.current)
  return (
    <div>
      <h2>useRef demo</h2>
      <input ref={inputRef} />
      <button onClick={onButtonClick}>Focus the input</button>
      <button onClick={() => setCount(Date.now())}>Focus the input</button>
    </div>
  )
}
