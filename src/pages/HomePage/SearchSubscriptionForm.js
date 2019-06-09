import React, { useState } from "react"
import PropTypes from "prop-types"
import { Form, Input, Button, Icon } from "semantic-ui-react"
import styles from "./SearchSubscriptionForm.module.css"

export function SearchSubscriptionForm(props) {
  const [address, setAddress] = useState("")

  function onSubmit() {
    const addr = address.trim()

    if (addr) {
      props.onSubmit(addr)
    }
  }

  function onChangeAddress(e) {
    setAddress(e.target.value)
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className={styles.row}>
        <div className={styles.input}>
          <Input
            placeholder="Find Subscription"
            onChange={onChangeAddress}
            value={address}
            autoFocus
            fluid
            size="huge"
          />
        </div>
        <Button icon size="huge">
          <Icon name="search" />
        </Button>
      </div>
    </Form>
  )
}

SearchSubscriptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchSubscriptionForm
