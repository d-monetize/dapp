const LOAD = "ACCOUNT/LOAD"
const UNLOAD = "ACCOUNT/UNLOAD"

export function reducer(state = "", action) {
  switch (action.type) {
    case LOAD:
      return action.address
    case UNLOAD:
      return ""
    default:
      return state
  }
}

export const actions = {
  load: address => ({ type: LOAD, address }),
  unload: () => ({ type: UNLOAD }),
}

export const selectors = {
  isConnected: state => !!state,
}
