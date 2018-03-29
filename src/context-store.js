import fp from 'lodash/fp'
import hoistNonReactStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'
import React from 'react'
import getComponentName from './utils/get-component-name'


export default ({ initialState, actions }) => {

    const context = React.createContext(initialState)

    class Filter extends React.Component {

        static propTypes = {
            payload: propTypes.object,
            Target: propTypes.func
        }

        shouldComponentUpdate(nextProps) {

            return !fp.isEqual(nextProps, this.props)
        }

        render() {

            return React.createElement(this.props.Target, this.props.payload)
        }
    }

    const connect = (

        transformer = fp.identity

    ) => Target => {

        const Connect = (props, ref) => (
            <context.Consumer>
                {context => {

                    return React.createElement(Filter, {
                        payload: { ...props, ...transformer(context), ref },
                        Target
                    })
                }}
            </context.Consumer>
        )

        Connect.displayName = `Connect(${getComponentName(Target)})`

        return hoistNonReactStatics(React.forwardRef(Connect), Target, { '__proto__': true })
    }

    class Provider extends React.Component {

        static displayName = 'Provider'

        constructor(props) {

            super(props)

            this.actions = fp.mapValues(
                action => (...args) => this.setState(action(this.state, ...args)),
                actions
            )

            this.state = initialState
        }

        render() {

            const { actions, props, state } = this

            return (
                <context.Provider value={{ actions, store: state }}>
                    {props.children}
                </context.Provider>
            )
        }
    }

    return {
        connect,
        Provider
    }
}
