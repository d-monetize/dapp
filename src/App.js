import React from "react"
import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container } from "semantic-ui-react"
import HomePage from "./pages/HomePage"
import CreateSubscriptionPage from "./pages/CreateSubscriptionPage"
import SubscriptionDetailPage from "./pages/SubscriptionDetailPage"

export function App(props) {
  return (
    <div>
      <Container>
        <Switch>
          <Route
            path="/subscriptions/create"
            component={CreateSubscriptionPage}
          />
          <Route
            path="/subscriptions/:address"
            component={SubscriptionDetailPage}
          />
          <Route component={HomePage} />
        </Switch>
      </Container>

      <ToastContainer />
    </div>
  )
}

export default App
