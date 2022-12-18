import { Box, Container, Flex, Link, Image } from "@modulz/design-system"
import { FC } from "react"
import { headerStyles } from "./headerStyles"

export const Header: FC = () => {
  headerStyles()
  return (
    <Box as="header">
      <Container size={4} css={{ padding:"0 30px" }}>
        <Flex align="center" justify="between" css={{ height: "60px" }}>
          <Container css={{ margin: "unset", padding: 0 }}>
            <Link href="/" title="Home" variant="subtle">
              <Container className="header-logo header-img" css={{padding: 0}} />
            </Link>
          </Container>
          <Container css={{ margin: "unset", padding: 0 }}>
            <Flex justify="between" align="center">
              <h2>Leonardo Guissi</h2>
              <Image className="header-img" src="user.svg" />
            </Flex>
          </Container>
        </Flex>
      </Container>
    </Box>
  )
}