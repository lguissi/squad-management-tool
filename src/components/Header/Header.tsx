import { Box, Container, Flex, Link } from "@modulz/design-system"
import { FC } from "react"
import { headerStyles } from "./headerStyles"

export const Header: FC = () => {
  headerStyles()
  return (
    <Box as="header">
      <Container size={4} css={{ padding:"0 30px" }}>
        <Flex align="center" justify="between" css={{ height: "60px" }}>
          <Container css={{ margin: "unset" }}>
            <Link href="/" title="Home" variant="subtle">
              <Container css={{ 
                background: "url(/logo-new.svg) left top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                color: "$whiteA1",
                width: "40px",
                height: "40px",
                padding: 0,
                margin: "auto"
              }} />
            </Link>
          </Container>
          <Container css={{ margin: "unset" }}>
            <h2>Leonardo Guissi</h2>
          </Container>
        </Flex>
      </Container>
    </Box>
  )
}