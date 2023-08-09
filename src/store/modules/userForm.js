export default {
    state: {
        userInfoFileds: {
            name: '',
            age: '',
            children: []
        }
    },
    getters: {
        userInfoFileds(state) {
            return state.userInfoFileds
        }
    },
    mutations: {
        setUserInfoFileds(state, user) {
            state.userInfoFileds = {
                name: user.name,
                age: user.age,
                children: user.children
            }
        }
    }
}