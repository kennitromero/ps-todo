import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'persist',
    paths: ['user']
  })(store)
}
