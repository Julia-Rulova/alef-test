export default {
    state: {
        userInfoFileds: {
            name: '',
            age: 1,
            children: []
        },
        isBtnActive: true
    },
    getters: {
        userInfoFileds(state) {
            return state.userInfoFileds;
        },
        isBtnActive(state) {
            return state.isBtnActive
        }
    },
    mutations: {
        setUserInfoFileds(state, user) {
            state.userInfoFileds = JSON.parse(JSON.stringify(user));
        },
        setIsBtnActive(state, val) {
            state.isBtnActive = val
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
                age: 1
            };

            ctx.state.userInfoFileds.children.push(newChild);
        },
    }
}