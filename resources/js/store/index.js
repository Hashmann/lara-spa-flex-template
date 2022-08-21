import Vuex from 'vuex'
import auth from './modules/auth.js'
import users from "./modules/users.js";

export default new Vuex.Store({
    modules: {
        auth,
        users
    }
})
