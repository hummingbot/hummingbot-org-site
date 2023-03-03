import React, { useState } from 'react'
import { H1, H4, P } from '@hummingbot/hbui/elements/typography'
import { Section } from '@hummingbot/hbui/elements/layout'
import { Container } from '../ui/elements/layout'
import { TextInput } from '@hummingbot/hbui/elements/input'
import { Button } from '@hummingbot/hbui/components/buttons'
import Spinner from '@hummingbot/hbui/components/spinner'
import Layout from '../ui/components/Layout'
import isEmail from 'validator/lib/isEmail'
import tw, { styled, css } from 'twin.macro'
import Footer from '../ui/components/footer'
import Navigation from '../ui/components/Navigation'
import Seo from '../system/seo'
import {
  createContact,
  createCompany,
  createDeal,
  sendEmail,
} from '../hooks/use-zoho'

const options = [
  {
    id: 'default',
    value: 'Please select... (What are you looking for)',
  },
  // {
  //   id: 'exchange',
  //   value: 'Exchange integration',
  // },
  // {
  //   id: 'protocol',
  //   value: 'Protocol integration',
  // },
  {
    id: 'customengineering',
    value: 'Custom Engineering',
  },
  {
    id: 'liquidityminingcampaign',
    value: 'Liquidity mining campaign',
  },
  {
    id: 'liquiditysolutions',
    value: 'Liquidity Solutions',
  },
  // {
  //   id: 'trading',
  //   value: 'Hummingbot Pro Trading Platform',
  // },
  // {
  //   id: 'consulting',
  //   value: 'Consulting',
  // },
  {
    id: 'other',
    value: 'Other (please specify)',
  },
]

const generateOptions = options => {
  return options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.value}
    </option>
  ))
}

function ContactUs() {
  const [motiveSpecified, setMotiveSpecified] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [tokenName, setTokenName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [calendlyText, setCalendlyText] = useState('')

  const [loading, setLoading] = useState(false)

  const [motive, setMotive] = useState(options[0])

  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [submitOnce, setSubmitOnce] = useState(false)

  const DealTypes = {
    liquidity: 'Liquidity Mining',
    trading: 'Hummingbot Pro',
    consulting: 'Consulting',
    other: 'Other',
  }

  const DealNamePrefix = {
    liquidity: 'LM - ',
    trading: 'PRO - ',
    consulting: 'CS - ',
    other: 'OTHER - ',
  }

  const { additional, otherOption } = (() => {
    if (['default'].includes(motive.id)) {
      return {
        additional: false,
        otherOption: false,
      }
    }
    if (motive.id === 'other') {
      return {
        additional: true,
        otherOption: true,
      }
    }

    return {
      additional: true,
      otherOption: true,
    }
  })()

  const firstNameError = firstName.length < 2
  const lastNameError = lastName.length < 2
  const emailError = !isEmail(email)
  const motiveError = motive.id === 'default'
  const companyNameError = additional && companyName.length < 1
  const companyTypeError = additional && companyType.length < 1
  const tokenNameError = additional && tokenName.length < 1
  const telegramFilled = typeof telegram === 'string' && telegram.length > 3
  const calendlyError = calendlyText.length > 0

  const isFormValid = () => {
    return (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !companyNameError &&
      !calendlyError
    )
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setMotive(options[0])
    setTelegram('')
    setCalendlyText('')
    setCompanyName('')
    setCompanyType('')
    setTokenName('')
    setAttemptedSubmit(false)
    setMotiveSpecified('')
  }

  const submitForm = async e => {
    e.preventDefault()
    e.stopPropagation()
    setSubmitOnce(true)
    setAttemptedSubmit(true)
    if (!isFormValid()) {
      window.alert("Please fill the form's required fields")
      setAttemptedSubmit(false)
      return
    }

    const newContact = {
      Last_Name: lastName,
      First_Name: firstName,
      Email: email,
      Account_Name: companyName,
      Owner: process.env.GATSBY_PARTNER_ID,
    }

    const newCompany = {
      Account_Name: companyName,
      Company_Type: companyType.split(','),
      Token: tokenName,
      Owner: process.env.GATSBY_PARTNER_ID,
    }

    if (telegram) newContact.Telegram = telegram
    if (calendlyText) newContact.Calendly = calendlyText

    setLoading(true)

    const shouldSendToZoho = !['default', 'protocol', 'exchange'].includes(
      motive.id,
    )

    if (shouldSendToZoho) {
      try {
        await createCompany(newCompany)

        const contactResponse = await createContact(newContact)

        if (
          contactResponse?.data[0]?.status === 'error' &&
          contactResponse?.data[0]?.code !== 'DUPLICATE_DATA'
        ) {
          window.alert(contactResponse?.data[0]?.code, false)
          setAttemptedSubmit(false)
          return
        }

        const newDeals = {
          Deal_Name: `${DealNamePrefix[motive.id]}${companyName}`,
          Deal_Type: DealTypes[motive.id],
          Account_Name: companyName,
          Contact_Name: contactResponse?.data[0]?.details?.id,
          Symbol: tokenName,
          Pipeline: 'Standard',
          Stage: 'Opportunity',
          Owner: process.env.GATSBY_PARTNER_ID,
        }

        if (motiveSpecified) {
          newDeals.Description = motiveSpecified
        }

        const dealResponse = await createDeal(newDeals)

        if (dealResponse?.status === 'error') {
          window.alert(dealResponse?.data[0]?.code)
          setAttemptedSubmit(false)
          return
        }
        if (dealResponse?.data[0]?.status === 'error') {
          window.alert(dealResponse?.data[0]?.code)
          setAttemptedSubmit(false)
          return
        }
        window.alert('Received your request!')
        resetForm()
        setLoading(false)
      } catch (error) {
        window.alert(error)
        setAttemptedSubmit(false)
        window.alert('Zoho CRM ERROR')
      }
    } else {
      try {
        sendEmail(
          {
            Last_Name: lastName,
            First_Name: firstName,
            Email: email,
            message: JSON.stringify(
              {
                motive: motive?.value ?? null,
                companyName,
                companyType,
                token: tokenName,
                additionalMessage: motiveSpecified,
              },
              null,
              2,
            ),
            Telegram: telegram,
            Calendly: calendlyText,
            reply_to: process.env.GATSBY_CONTACT_OWNER_EMAIL,
          },
          e => {
            if (e) {
              window.alert('Received your request!')
              resetForm()
              setLoading(false)
            } else {
              window.alert('Request Error!')
              setLoading(false)
            }
          },
        )
      } catch (error) {
        window.alert('Request Error!')
        setLoading(false)
      }
    }
  }

  return (
    <Layout>
      <div style={{background: 'url(/assets/OvalGradient.svg) no-repeat 50% 20%'}}>
        <Seo pageTitle="Contact Us" />
        <Navigation />
        <Section tw="py-xxl">
          <Container>
            <H1>Let's Talk.</H1>
            <StyledH4>
              While we are great at building bots,
              <br />
              <StyledPrimary>
                some things are better left for humans
              </StyledPrimary>
            </StyledH4>
          </Container>
        </Section>
        <Section>
          <Container tw="mb-40 flex flex-col justify-between lg:flex-row">
            <FormDiv>
              <P isBold tw="mb-md border-b-2 border-terminal inline-flex">
                CONTACT US
              </P>
              <br />
              <Flex>
                <TextInput
                  style={{ width: '100%' }}
                  placeholder="First Name"
                  required
                  value={firstName}
                  isInvalid={submitOnce && firstNameError}
                  onChange={event => setFirstName(event.target.value)}
                />

                <StyledTextInput
                  style={{ width: '100%' }}
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={event => setLastName(event.target.value)}
                  isInvalid={submitOnce && lastNameError}
                />
              </Flex>
              <br />
              <Flex>
                <StyledTextInput
                  placeholder="Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  isInvalid={submitOnce && emailError}
                  required
                />
              </Flex>
              <br />
              <Flex>
                <Select
                  value={motive.value}
                  onChange={e =>
                    setMotive(
                      options.find(option => option.value === e.target.value),
                    )
                  }
                >
                  {generateOptions(options)}
                </Select>
              </Flex>
              <br />
              {additional && (
                <>
                  <Flex>
                    <StyledTextInput
                      placeholder="Company Name"
                      value={companyName}
                      onChange={event => setCompanyName(event.target.value)}
                      required
                      isInvalid={submitOnce && companyNameError}
                    />
                  </Flex>
                  <br />
                  <Flex>
                    <StyledTextInput
                      style={{ width: '100%' }}
                      placeholder="Company Type"
                      value={companyType}
                      onChange={event => setCompanyType(event.target.value)}
                      isInvalid={submitOnce && companyTypeError}
                    />
                    <StyledTextInput
                      style={{ width: '100%' }}
                      placeholder="Token Name/Symbol"
                      value={tokenName}
                      onChange={event => setTokenName(event.target.value)}
                      isInvalid={submitOnce && tokenNameError}
                    />
                  </Flex>
                  <br />

                  <Flex>
                    {otherOption && (
                      <StyledTextInput
                        as='textarea'
                        placeholder="Additional Info (optional)"
                        value={motiveSpecified}
                        onChange={event => setMotiveSpecified(event.target.value)}
                        isInvalid={submitOnce && motiveError}
                      />
                    )}
                  </Flex>
                  <br />
                </>
              )}
              <Flex>
                <TextInput
                  placeholder="Telegram (optional)"
                  value={telegram}
                  onChange={event => setTelegram(event.target.value)}
                  isInvalid={submitOnce && telegramFilled}
                />
              </Flex>
              <br />
              <Flex>
                <TextInput
                  type="text"
                  placeholder="Calendy (optional)"
                  value={calendlyText}
                  onChange={event => setCalendlyText(event.target.value)}
                />
              </Flex>
              <br />
              {loading && (
                <div tw="mb-md">
                  <Spinner center />
                </div>
              )}
              <Flex>
                <Button
                  tw='bg-terminal'
                  isSuccess={isFormValid}
                  disabled={attemptedSubmit}
                  style={{ width: '100%' }}
                  label="SEND"
                  onClick={e => submitForm(e)}
                >
                  Submit
                </Button>
              </Flex>
            </FormDiv>
            <CompanyInfoDiv>
              <P isBold tw='text-terminal'>Press kit</P>
              <a href="https://drive.google.com/drive/folders/1JypVOqB1ek4zAU6HMjKNRsuIsfhnLFEs">
                <P isMedium isWhite style={{ lineHeight: '100%' }}>
                  Download our press kit
                </P>
              </a>
              <br />
              <P isBold tw='text-terminal'>Physical office</P>
              <P isMedium isWhite style={{ lineHeight: '120%' }}>
                800 W El Camino Real<br />
                Ste 180<br />
                Mountain View, CA 94040<br />
              </P>
              <br />
              <P isBold tw='text-terminal'>Corporate Email</P>
              <a href="mailto:contact@coinalpha.com">
                <P isMedium isWhite style={{ lineHeight: '100%' }}>
                  contact@coinalpha.com
                </P>
              </a>
              <br />
              <P isBold tw='text-terminal'>
                Having trouble with miner
              </P>
              <a
                href="https://support.hummingbot.io/hc/en-us"
                target="_black"
                rel="noreferrer"
              >
                <P isMedium style={{ lineHeight: '100%' }}>
                  Visit the support center
                </P>
              </a>
            </CompanyInfoDiv>
          </Container>
          <Footer hideContactUs />
        </Section>
      </div>
    </Layout>
  )
}

const StyledH4 = styled(H4)(() => [
  css`
    line-height: 110%;
  `,
])

const StyledPrimary = styled.span(() => [tw`text-terminal`])

const FormDiv = styled.div(() => [
  tw`p-lg w-full lg:w-[58%]`,
  css`
    background: rgba(15, 25, 36, 0.7);
    border: 2px solid #0F1924;
    border-radius: 13px;
    input, select, textarea {
      background-color: #13121f;
    }
  `,
])

const CompanyInfoDiv = styled.div(() => [
  tw`p-lg w-full lg:w-[40%]`,
  css`
    background: rgba(15, 25, 36, 0.7);
    border: 2px solid #0F1924;
    border-radius: 13px;
  `,
])

const Flex = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-end;
`

const StyledTextInput = styled(TextInput)(() => [
  css`
    width: 100%;
    svg {
      padding-bottom: 6px;
    }
  `,
])

const Select = styled.select(() => [
  tw`outline-blue`,
  css`
    position: relative;
    height: 40px;
    padding-left: 10px;
    width: 100%;
    background: #282c2f;
    border-radius: 4px;
    border-right: 16px solid transparent;
    color: #dfe1e2 !important;
  `,
])

export default ContactUs
