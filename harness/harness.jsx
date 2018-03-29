import React from 'react'
import Button from './components/button'
import Counter from './components/counter'
import FavouriteFilms from './components/favourite-films'
import Welcome from './components/welcome'
import Store from './store'


const ref = React.createRef()

export default class extends React.Component {

    static displayName = 'Harness'

    componentDidMount() {

        ref.current.sayHello()
    }

    render() {
        return (
            <Store.Provider>
                <Counter />
                <Button />
                <Welcome message="Yo!" />
                <FavouriteFilms ref={ref} />
            </Store.Provider>
        )
    }
}
