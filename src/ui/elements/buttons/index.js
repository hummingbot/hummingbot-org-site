import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Button } from '@hummingbot/hbui/elements/buttons'
import { P } from '@hummingbot/hbui/elements/typography'

const CustomExternalLinkButton = styled(Button)(() => [
  tw`flex`,
  css`
    background: rgba(95, 255, 215, 0.10);
    border-radius: 4px;
    :hover {
      background: transparent;
      border-color: #5FFFD7;
    }
    :active {
      background: transparent;
      border-color: rgba(95, 255, 215, 0.5);
    }
  `,
])

export function LinkButton({label, ...props}) {
  return (
    <CustomExternalLinkButton {...props}>
      <P isMedium tw='text-terminal font-medium text-base'>{label}</P>
    </CustomExternalLinkButton>
  );
}

export const CustomRoundButton = styled(Button)(() => [
  tw`bg-terminal rounded-[4px] text-black font-medium hover:(bg-transparent text-terminal border-terminal) active:(bg-transparent text-terminal border-terminal/50)`,
])

export const InternalLinkButton = styled(Button)(() => [
  tw`text-terminal flex`,
  css`
    background: rgba(95, 255, 215, 0.10);
    border-radius: 4px;
    :hover {
      background: transparent;
      border-color: #5FFFD7;
      color: #5FFFD7;
    }
    :active {
      background: transparent;
      border-color: rgba(95, 255, 215, 0.5);
    }
  `,
])
