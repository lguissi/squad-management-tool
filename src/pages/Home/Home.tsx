import { Container } from "@modulz/design-system"
import { FC } from "react"
import { TeamList } from "../../components/TeamList"

export const Home: FC = () => {
  return (
    <Container>
      <TeamList />
    </Container>
  )
}