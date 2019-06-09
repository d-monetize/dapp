import React from "react"
import PropTypes from "prop-types"
import styles from "./index.module.css"
import { Container, Button } from "semantic-ui-react"
import SearchSubscriptionForm from "./SearchSubscriptionForm"

export function HomePage(props) {
  function onSubmit(address) {
    props.history.push(`/subscriptions/${address}`)
  }

  function onClickCreateSubscription() {
    props.history.push("/subscriptions/create")
  }

  return (
    <div className={styles.HomePage}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <h1 className={styles.header}>D Monetize</h1>
        </div>
        <div className={styles.form}>
          <SearchSubscriptionForm onSubmit={onSubmit} />
        </div>
        <Button color="green" size="huge" onClick={onClickCreateSubscription}>
          Create Subscription
        </Button>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default HomePage
