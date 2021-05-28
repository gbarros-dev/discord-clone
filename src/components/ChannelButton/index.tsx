import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

type ChannelButtonProps = {
  channelName?: string
}

const ChannelButton = ({ channelName }: ChannelButtonProps) => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton
