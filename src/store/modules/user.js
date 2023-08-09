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
        setUserName(state, name) {
            state.currentUser.name = name;
        },
        setUserAge(state, age) {
            state.currentUser.age = age;
        },
        setUserChildren(state, children) {
            state.currentUser.children = children;
        }
    },
    actions: {
        addUserChild(ctx) {
            let newChild = {
                id: Date.now(),
                name: '',
                age: 0
            }

            let newChildren = ctx.state.currentUser.children.push(newChild);

            ctx.commit('setUserChildren', newChildren);
        },
        removeUserChild(ctx, childId) {
            let newChildren = ctx.state.currentUser.children.filter(c => c.id !== childId);

            ctx.commit('setUserChildren', newChildren);
        }
    }
}