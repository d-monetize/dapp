import React, { useState } from "react"
import PropTypes from "prop-types"
import { Form, Input } from "semantic-ui-react"

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
      <Input
        placeholder="Find Subscription"
        onChange={onChangeAddress}
        value={address}
        autoFocus
        fluid
        size="big"
      />
    </Form>
  )
}

SearchSubscriptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchSubscriptionForm
