import React from 'react'
import Store from '../store'


export default Store.connect(

    ({ store }) => ({ count: store.count })

)(

    ({ count }) => <div>{count}</div>

)
