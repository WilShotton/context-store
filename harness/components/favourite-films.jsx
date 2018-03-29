import fp from 'lodash/fp'
import hoistNonReactStatic from 'hoist-non-react-statics'
import propTypes from 'prop-types'
import React from 'react'
import Store from '../store'


const mapFilms = fp.map(film => <li key={film.name}>{film.name}</li>)

@Store.connect(({ store }) => ({ films: store.films }))
export default class FavouriteFilms extends React.Component {

    static propTypes = {
        films: propTypes.arrayOf(propTypes.shape({
            name: propTypes.string.isRequired
        })).isRequired
    }

    static sayGoodbye() {

        console.log('Goodbye!')
    }

    sayHello() {

        console.log('Hello world!')
    }

    render() {

        return (
            <div>
                <p>Some of your favourite films are:</p>
                <ul>
                    {mapFilms(this.props.films)}
                </ul>
            </div>
        )
    }
}
