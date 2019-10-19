import React, { useReducer } from 'react'

const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 }
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }, function(
    initData
  ) {
    initData.count = 10
    return initData
  })

  let { count } = state
  return (
    <div>
      <p>count Value {count}</p>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.INCREMENT
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.DECREMENT
          })
        }
      >
        Decrement
      </button>
    </div>
  )
}
