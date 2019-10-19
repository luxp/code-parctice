import React, { useState, useEffect, useReducer, useDebugValue } from 'react'
function useCounter(step = 1) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('xx')
  }, [])

  useDebugValue('debug value' + count)
  return [
    count,
    () => {
      setCount(count + step)
    }
  ]
}

export function CustomHookDemo() {
  let [count, setCount] = useCounter(10)
  return (
    <div>
      <h2>CustomHookDemo</h2>
      <p>You clicked {count} times</p>
      <button onClick={setCount}>Click me</button>
    </div>
  )
}

export function CustomHookDemo2() {
  let [count, setCount] = useCounter(5)
  let [count2, setCount2] = useCounter(10)
  return (
    <div>
      <h2>CustomHookDemo2</h2>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <button onClick={setCount}>Click me</button>
      <button onClick={setCount2}>Click me</button>
    </div>
  )
}

export class CustomHookDemo2ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 0
    }
    this.setCount = this.setCountWithStep(5, 'count').bind(this)
    this.setCount2 = this.setCountWithStep(10, 'count2').bind(this)
  }

  setCountWithStep(step = 1, stateKey) {
    return () => {
      this.setState({
        [stateKey]: this.state[stateKey] + step
      })
    }
  }

  render() {
    let { count, count2 } = this.state
    return (
      <div>
        <h2>CustomHookDemo2ClassComponent</h2>
        <p>You clicked {count} times</p>
        <p>You clicked {count2} times</p>
        <button onClick={this.setCount}>Click me</button>
        <button onClick={this.setCount2}>Click me</button>
      </div>
    )
  }
}
