import React from 'react'
import Store from '../store'


export default Store.connect(

    ({ actions }) => ({ onClick: actions.onIncrement })

)(

    ({ onClick }) => <button onClick={onClick}>Increment</button>
)
