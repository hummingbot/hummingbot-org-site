import React, { Component } from 'react'
import TextInput from '@hummingbot/hbui/components/input/TextInput'
import { Button } from '@hummingbot/hbui/elements/buttons'
import { CustomRoundButton } from '../../elements/buttons'
import { LabelSmall } from '@hummingbot/hbui/elements/typography'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const ERR_KEY = 'email-list.'

class MailchimpSubscribe extends Component {
  state = {
    email: '',
    success: '',
    error: '',
    braveWarning: '',
  }

  handleEmailChange = (e) => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value,
      success: '',
      error: '',
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email } = this.state
    console.log(email)
    try {
      const { endpointOverride } = this.props
      const response = await addToMailchimp(email, {}, endpointOverride)
      if (response && response.result === 'success') {
        this.setState({ success: response.msg })
        // TO-DO: replace with posthog
        if (typeof window !== 'undefined' && typeof window.heap !== 'undefined') {
          window.heap.identify(email)
        }
      } else {
        console.log('error in await addToMailchimp')
        this.setState({ error: response.msg })
      }
    } catch (err) {
      console.error(err)
      if (err.message === 'Timeout') {
        this.setState({
          braveWarning: 'Looks like you are using Brave browser - please click the shield icon and toggle off "Ads and trackers blocked", then re-submit your email.'
        })
      }
    }
  }

  render() {
    const { email, success, error, braveWarning } = this.state
    const shortenedError = error
      ? error.slice(0, error.indexOf(ERR_KEY) + ERR_KEY.length)
      : null

    return (
      <div tw='my-md'>
        <form onSubmit={this.handleSubmit} tw='flex items-center mb-xs'>
          <TextInput
            tw='px-2 py-2 focus:outline-none hover:border-success'
            type='email'
            placeholder='Email address...'
            value={email}
            onChange={this.handleEmailChange}
          />
          <CustomRoundButton
            tw='px-2 py-2 rounded-md focus:outline-none'
            variant='success'
            type='submit'
            id='mc-embedded-subscribe'
          >
            Join now
          </CustomRoundButton>
        </form>
        <div tw='flex justify-center'>
          {success && <LabelSmall tw="text-success absolute">{success}</LabelSmall>}
          {shortenedError && <LabelSmall tw="text-danger absolute">{shortenedError}</LabelSmall>}
          {braveWarning && <LabelSmall id="braveWarning" tw="text-warning absolute">{braveWarning}</LabelSmall>}
        </div>
      </div>
    )
  }
}

export default MailchimpSubscribe