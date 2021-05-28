import { useEffect, useRef } from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) div.scrollTop = div.scrollHeight
  }, [])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Guilherme Barros'
            date='27/05/2021'
            content='Hoje é só mais um dia normal'
          />
        ))}

        <ChannelMessage
          author='Diego Fernandes'
          date='27/05/2021'
          content={
            <>
              <Mention>@Guilherem Barros</Mention>, bom dia
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
