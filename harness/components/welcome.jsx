import propTypes from 'prop-types'
import React from 'react'
import Store from '../store'


const transformer = ({ store }) => {

    return { user: store.user }
}

const Welcome = ({ message, user }) => (
    <p>{`${message} ${user.name}!`}</p>
)

Welcome.propTypes = {
    message: propTypes.string.isRequired,
    user: propTypes.shape({
        name: propTypes.string.isRequired
    }).isRequired
}

export default Store.connect(transformer)(Welcome)
