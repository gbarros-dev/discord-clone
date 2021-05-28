import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles'

const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Guilherme Barros</strong>
          <span>#guilb</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo
