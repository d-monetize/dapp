import { reducer, actions } from "./web3"

describe("reducer", () => {
  test("set", () => {
    const web3 = {}

    expect(reducer(undefined, actions.set(web3))).toEqual(web3)
  })
})
