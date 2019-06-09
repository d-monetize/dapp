import React from "react"
import { shallow } from "enzyme"
import { SearchSubscriptionForm } from "./SearchSubscriptionForm"

const props = {
  onSubmit: jest.fn(),
}

beforeEach(() => {
  props.onSubmit.mockClear()
})

test("it renders", () => {
  const component = shallow(<SearchSubscriptionForm {...props} />)

  expect(component).toMatchSnapshot()
})

test("change address", () => {
  const component = shallow(<SearchSubscriptionForm {...props} />)

  component.find("Input").simulate("change", { target: { value: "foo" } })

  expect(component).toMatchSnapshot()
})

test("onSubmit", () => {
  const component = shallow(<SearchSubscriptionForm {...props} />)

  component.find("Input").simulate("change", { target: { value: "bar" } })
  component.find("Form").simulate("submit")

  expect(props.onSubmit.mock.calls.length).toEqual(1)
  expect(props.onSubmit.mock.calls[0][0]).toEqual("bar")
})

test("onSubmit should not be called if address is empty", () => {
  const component = shallow(<SearchSubscriptionForm {...props} />)

  component.find("Form").simulate("submit")

  expect(props.onSubmit.mock.calls.length).toEqual(0)
})
