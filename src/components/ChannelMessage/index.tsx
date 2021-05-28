import { ReactElement, ReactNode } from 'react'

import { Container, Avatar, Message, Header, Content } from './styles'
export { Mention } from './styles'

export type ChannelMessageProps = {
  author: string
  date: string
  content: string | ReactElement | ReactNode
  hasMention?: boolean
  isBot?: boolean
}

const ChannelMessage = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}: ChannelMessageProps) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  )
}

export default ChannelMessage
