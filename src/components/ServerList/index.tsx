import { Container, Separator } from './styles'

import ServerButton from '../ServerButton'

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={6} />
      <ServerButton />
    </Container>
  )
}

export default ServerList
