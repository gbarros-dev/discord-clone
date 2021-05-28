import { Container, Role, User, Avatar } from './styles'

type UserRowProps = {
  nickname: string
  isBot?: boolean
}

const UserRow = ({ nickname, isBot }: UserRowProps) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname='Guilherme Barros' />

      <Role>Offline - 18</Role>

      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
      <UserRow nickname='Diego Fernandes' isBot />
    </Container>
  )
}

export default UserList
