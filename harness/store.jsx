import ContextStore from '../src/context-store'


export default ContextStore({

    actions: {
        onIncrement: (state, update) => {

            return { ...state, count: state.count + 1 }
        }
    },

    initialState: {

        count: 0,

        films: [
            {
                name: 'There Will Be Blood'
            },
            {
                name: 'Apocalypse Now'
            }
        ],

        user: {
            name: 'Hawk'
        }
    }
})
