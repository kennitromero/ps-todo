export const state = () => ({
    user: {
        id: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        image: null,
        token: null,
        gender: null,
    }
})

export const getters = {
    isLoggedUser(state) {
        return state.user.id !== null
    },
    getFullName(state) {
        return state.user.firstName + ' ' + state.user.lastName
    },
    getEmail(state) {
        return state.user.email
    },
    getUsername(state) {
        return state.user.username
    },
    getImage(state) {
        return state.user.image
    },
    getGender(state) {
        if (state.user.gender === 'female') {
            return 'Femenino'
        }

        return 'Masculino'
    }
}

export const mutations = {
    setUserLogged(state, currentUser) {
        state.user = currentUser
    },
    setDefaultUser(state) {
        state.user = {
            id: null,
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            image: null,
            token: null,
        }
    }
}

export const actions = {
    async loginUserAction(context, payload) {
        try {
            const response = await this.$axios.post('/auth/login', payload)
            context.commit('setUserLogged', response.data)

            return 'OK'
        } catch (err) {
            if (err.response.status === 400) {
                return 'INVALID_CREDENTIALS'
            }

            if (err.response.status === 500) {
                return 'ERROR'
            }
        }
    },
    async getTodosByUserID(context, userID) {
        try {
            const r = await this.$axios.get('todos/user/5')
            return r.data
        } catch (err) {
            return 'ERROR'
        }
    }
}
