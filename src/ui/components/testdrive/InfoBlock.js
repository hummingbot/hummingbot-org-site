/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import { useState, useRef } from 'react'
import tw, { styled, css } from 'twin.macro'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../../elements/layout' /* custom container with more left-right padding */
import { H6, H3, H4, H5, P, Green } from '@hummingbot/hbui/elements/typography'
import { TextInput } from "@hummingbot/hbui/elements/input"
import { ExternalLinkButton, CustomRoundButton } from '../../elements/buttons'
import { validateEmail } from "../../../helpers/validate"
import { showNotify } from '../../../helpers/notify'
import getWindowDimensions from "../../../helpers/useWindowDimensions"
import IframeComm from "../../elements/IframeCommon"

function InfoBlock() {
  const { isDesktop } = getWindowDimensions()
  const [userEmail, setEmail] = useState("")
  const iframeRef = useRef()
  const [loading, setLoad] = useState(false)
  const [inputActive, setInputActive] = useState(false)
  const instance = useRef(null)

  // const sendEvent = ({ event, eventInfo }) => {
  //   const amplitudeTrackingContext = {
  //     "context.app": "io_site",
  //     "context.locale": window?.location.pathname,
  //     "context.currentPageUrl": window?.location.href,
  //   }

  //   instance.current?.logEvent(event, {
  //     ...eventInfo,
  //     ...amplitudeTrackingContext,
  //   })
  // }

  const onReceiveMessage = e => {
    setLoad(false)
    if (e.status) {
      window?.open(e.text, "_blank")
    } else {
      showNotify(e.text, false)
    }
  }

  const gotoBot = () => {
    if (!validateEmail(userEmail)) {
      showNotify("User email is invalid!", false)
      return
    }

    setLoad(true)

    //TODO: This has to be replaced with env variables. 
    const postData = {
      owner_email: userEmail,
      project: `Hummingbot 1.7.0`,
      token: "5dba96595c024b75ad3eef16933b752b",
    }

    // sendEvent({
    //   event: "[test drive page] submit email address",
    // })

    iframeRef?.current?.sendMessage(postData)
  }


  const handleBlur = () => {
    if (userEmail === "") {
      setInputActive(false)
    } else {
      setInputActive(true)
    }
  }

  const handleChange = value => {
    setEmail(value)
    const testValue = value || userEmail
    if (testValue === "") {
      setInputActive(false)
    } else {
      setInputActive(true)
    }
  }

  return (
    <Section tw='z-10 py-8 md:py-12 lg:py-36 xl:py-60' style={{background: 'url(/assets/OvalGradient.svg) no-repeat 50% 20%'}}>
      <Container tw='mb-xl'>
        <Columns>

          {isDesktop && (
            <ColumnA>
              <div tw='flex justify-between mb-md'>
                <H5 tw='font-bold text-white leading-none'>Try out Hummingbot now</H5>
              </div>
              <div tw='text-white max-w-[350px] mb-xs'>
                <div className="input-container">
                  <TextInput
                    type="text"
                    name="email"
                    onFocus={() => setInputActive(true)}
                    onBlur={handleBlur}
                    hasError={!validateEmail(userEmail)}
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={e => handleChange(e.target.value)}
                  />
                </div>
                <br/>
                <CustomRoundButton
                  isLarge
                  label="Start Test Drive"
                  onClick={() => gotoBot()}
                >Start Test Drive</CustomRoundButton>
              </div>
            </ColumnA>
          )}

          {!isDesktop && (
            <ColumnA>
              <div tw='flex justify-between mb-md'>
                <H5 tw='font-bold text-white'>Go to this page in a desktop browser</H5>
              </div>
              <P tw='text-white'>Hummingbot Test Drive launches a Docker container in your browser and is not available on mobile devices.</P>
            </ColumnA>
          )}

          <ColumnB>
            <div tw='flex justify-between mb-md'>
              <CustomH6>How does Test Drive work?</CustomH6>
            </div>
            <P tw='text-white mb-xs'>
              Test Drive spins up a new Docker instance of Hummingbot in your browser. After 2 hours, the Docker container and all information you enter into it are permanently deleted.
            </P>
            <P tw='text-white mb-md'>
              Use Test Drive for paper trading and testing purposes only. For production bots, we recommend installing the Docker or source versions of Hummingbot.
            </P>
            <a href="https://www.youtube.com/watch?v=8j4T3HEAML8" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between mb-xxs min-w-[280px]' isLarge label='Test Drive demo video' />
            </a>
            <a href="https://hummingbot.org/operation/" target='_blank' rel="noreferrer">
              <ExternalLinkButton tw='justify-between min-w-[280px]' isLarge label='Docs: Basic Operations' />
            </a>
          </ColumnB>
        </Columns>
      </Container>
      <IframeComm
        ref={iframeRef}
        attributes={{
          src: "https://hummingbot-test-drive.appsembler.com/isc/newdeploy/",
          width: "0",
          height: "0",
        }}
        handleReceiveMessage={onReceiveMessage}
      />
    </Section>
  )
}

export default InfoBlock

const Columns = styled.div(() => [
  tw`items-start my-md grid grid-cols-1 gap-0 lg:(my-xl grid-cols-2 gap-8)`,
])

const ColumnA = styled.div(() => [
  tw`mb-sm border-2 border-terminal p-sm lg:(p-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const ColumnB = styled.div(() => [
  tw`mb-sm p-sm lg:(p-md mb-0)`,
  css`
    background: #161C18;
    border-radius: 10px;
  `,
])

const CustomH6 = styled(H6)(() => [
  tw`font-medium text-terminal leading-tight w-[calc(100% - 38px)]`,
])
