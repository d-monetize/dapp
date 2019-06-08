import { combineReducers } from "redux"
import * as account from "./account"
import * as web3 from "./web3"

const reducer = combineReducers({
  account: account.reducer,
  web3: web3.reducer,
})

export default reducer

export const actions = {
  account: account.actions,
  web3: web3.actions,
}

export const selectors = {
  account: {
    isConnected: state => account.selectors.isConnected(state.account),
  },
}
