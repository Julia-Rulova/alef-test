export default {
    state: {
        currentUser: {
            name: 'Иван',
            age: 22,
            children: [
                {
                    id: 0,
                    name: 'Мария',
                    age: 12
                }
            ]
        }
    },
    getters: {
        currentUser(state) {
            return state.currentUser;
        }
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        }
    }
}