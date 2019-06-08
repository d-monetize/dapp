import React from "react"
import { shallow } from "enzyme"
import { CreateSubscriptionPage } from "./index"

test("it renders", () => {
  const component = shallow(<CreateSubscriptionPage />)

  expect(component).toMatchSnapshot()
})
