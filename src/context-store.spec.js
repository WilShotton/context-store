import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ContextStore from './context-store'


Enzyme.configure({ adapter: new Adapter() })

describe('ContextStore', () => {

    describe('ContextStore', () => {

        const store = ContextStore({
            actions: {},
            store: {}
        })

        it('should return a connect function', () => {

            expect(store.connect).toEqual(expect.any(Function))
        })

        it('should return a Provider', () => {

            expect(store.Provider).toEqual(expect.any(Function))
            expect(store.Provider.displayName).toBe('Provider')
        })
    })


    describe('connect', () => {

        const Target = class extends React.Component {

            static displayName = 'Target'

            constructor(props) {

                super(props)

                console.log('Target', props)
            }

            render() {


                return (
                    <div>Target</div>
                )
            }
        }

        let connect

        beforeEach(() => {

            connect = ContextStore({
                actions: {
                    update: state => {
                        return { ...state, foo: 'baz' }
                    }
                },
                store: {
                    foo: 'bar'
                }
            }).connect
        })

        it('should return a factory function', () => {

            const Connected = connect()(Target)

            expect(connect()).toEqual(expect.any(Function))

            expect(Connected).toEqual(expect.any(Function))
            expect(Connected.displayName).toBe('Connect(Target)')
        })

        it('should connect a Component to the store', () => {

        })
    })

    describe('Provider', () => {

        it('should be true', () => {

            expect(true).toBe(true)
        })
    })
})
