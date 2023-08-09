import { createStore } from 'vuex'

import user from './modules/user'
import userForm from './modules/userForm'

export default createStore({
    modules: {
        user,
        userForm
    }
})