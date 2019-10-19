import React, { useState, useEffect } from 'react'

export function CounterWithEffect() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    document.title = `click count ${count}`
    console.log(`log count ${count}`)
    return () => {
      console.log(`useEffect return ${count}`)
    }
  }, [count])

  return (
    <div>
      <h2>CounterWithEffect</h2>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  )
}

export class CounterWithEffectClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 0
    }
  }

  componentDidMount() {
    let { count } = this.state
    console.log(`log count in classComponent ${count}`)
  }

  componentDidUpdate(preProps, preState) {
    let { count } = this.state
    if (count !== preState.count) {
      console.log(`log count in classComponent ${count}`)
    }
  }

  render() {
    let { count, count2 } = this.state
    return (
      <div>
        <h2>CounterWithEffectClassComponent</h2>
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
