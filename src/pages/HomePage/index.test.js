import React from "react"
import { shallow } from "enzyme"
import { HomePage } from "./index"

test("it renders", () => {
  const component = shallow(<HomePage />)

  expect(component).toMatchSnapshot()
})
