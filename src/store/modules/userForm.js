export default {
    state: {
        userInfoFileds: {
            name: '',
            age: 0,
            children: []
        }
    },
    getters: {
        userInfoFileds(state) {
            return state.userInfoFileds;
        }
    },
    mutations: {
        setUserInfoFileds(state, user) {
            state.userInfoFileds = JSON.parse(JSON.stringify(user));
        }
    },
    actions: {
        deleteChild(ctx, childId) {
            ctx.state.userInfoFileds.children = ctx.state.userInfoFileds.children.filter(c => c.id !== childId)
        },
        addChild(ctx) {
            let newChild = {
                id: Date.now(),
                name: "",
                age: 0
            };

            ctx.state.userInfoFileds.children.push(newChild);
        },
    }
}