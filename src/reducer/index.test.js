import reducer, { actions, selectors } from "./index"

describe("selectors", () => {
  describe("account", () => {
    describe("isConnected", () => {
      test("is connected", () => {
        const account = "0x01123"
        const state = reducer(undefined, actions.account.load(account))

        expect(selectors.account.isConnected(state)).toEqual(true)
      })

      test("is not connected", () => {
        const state = reducer(undefined, {})

        expect(selectors.account.isConnected(state)).toEqual(false)
      })
    })
  })
})
