const SET = "WEB3/SET"

export function reducer(state = null, action) {
  switch (action.type) {
    case SET:
      return action.web3
    default:
      return state
  }
}

export const actions = {
  set: web3 => ({ type: SET, web3 }),
}
