import React from "react"
import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HomePage from "./pages/HomePage"
import styles from "./App.module.css"
import CreateSubscriptionPage from "./pages/CreateSubscriptionPage"
import SubscriptionDetailPage from "./pages/SubscriptionDetailPage"

export function App(props) {
  return (
    <div className={styles.App}>
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

      <ToastContainer />
    </div>
  )
}

export default App
