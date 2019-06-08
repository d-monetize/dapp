import React from "react"
import { shallow } from "enzyme"
import { SubscriptionDetailPage } from "./index"

test("it renders", () => {
  const component = shallow(<SubscriptionDetailPage />)

  expect(component).toMatchSnapshot()
})
