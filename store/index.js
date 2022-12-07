export const getters = {}

export const state = () => ({
    user: {
        id: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        image: null,
        token: null,
    }
})

export const mutations = {
    setUserLogged(state, currentUser) {
        state.user = currentUser
    }
}

export const actions = {
    async loginUserAction(context, payload) {
        try {
            const response = await this.$axios.post('/auth/login', payload)
            context.commit('setUserLogged', response.data)

            return 'ERROR'
        } catch (err) {
            if (err.response.status === 400) {
                return 'INVALID_CREDENTIALS'
            }

            if (err.response.status === 500) {
                return 'ERROR'
            }
        }
    }
}
