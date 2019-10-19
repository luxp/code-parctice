import React, { useState } from 'react'

export function Counter() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked count2 {count2} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  )
}

export class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 0
    }
  }
  render() {
    let { count, count2 } = this.state
    return (
      <div>
        <h2>CounterClassComponent</h2>
        <p>You clicked {count} times</p>
        <p>You clicked count2 {count2} times</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1
            })
          }}
        >
          Click me
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: count2 + 1
            })
          }}
        >
          Click me
        </button>
      </div>
    )
  }
}
