import React from "react"
import { shallow } from "enzyme"
import { HomePage } from "./index"

const props = {
  history: {
    push: jest.fn(),
  },
}

beforeEach(() => {
  props.history.push.mockClear()
})

test("it renders", () => {
  const component = shallow(<HomePage {...props} />)

  expect(component).toMatchSnapshot()
})

test("onSubmit", () => {
  const component = shallow(<HomePage {...props} />)

  component.find("SearchSubscriptionForm").simulate("submit", "address")

  expect(props.history.push.mock.calls.length).toEqual(1)
  expect(props.history.push.mock.calls[0][0]).toEqual("/subscriptions/address")
})

test("onClickCreateSubscription", () => {
  const component = shallow(<HomePage {...props} />)

  component.find("Button").simulate("click")

  expect(props.history.push.mock.calls.length).toEqual(1)
  expect(props.history.push.mock.calls[0][0]).toEqual("/subscriptions/create")
})
