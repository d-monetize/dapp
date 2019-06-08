import { reducer, actions, selectors } from "./account"

describe("reducer", () => {
  test("load", () => {
    const account = "0x0123"

    expect(reducer(undefined, actions.load(account))).toEqual(account)
  })

  test("unload", () => {
    const account = "0x0123"
    let state = reducer(undefined, actions.load(account))

    expect(reducer(state, actions.unload())).toEqual("")
  })
})

describe("selectors", () => {
  describe("isConnected", () => {
    test("is connected", () => {
      const account = "0x0123"
      const state = reducer(undefined, actions.load(account))

      expect(selectors.isConnected(state)).toEqual(true)
    })

    test("is not connected", () => {
      const account = "0x0123"
      const state = reducer(undefined, {})

      expect(selectors.isConnected(state)).toEqual(false)
    })
  })
})
