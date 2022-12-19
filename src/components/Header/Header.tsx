import { Box, Container, Flex, Link, Text, Avatar } from "@modulz/design-system"
import { FC } from "react"
import { headerStyles } from "./headerStyles"

export const Header: FC = () => {
  headerStyles()
  return (
    <Box as="header">
      <Container size={4} css={{
        padding:"0 15px",
        '@bp2': {
          padding:"0 30px"
        }
      }}>
        <Flex align="center" justify="between" css={{ height: "50px" }}>
          <Container css={{ margin: "unset", padding: 0 }}>
            <Link href="/" title="Home" variant="subtle">
              <Container className="header-logo" css={{padding: 0}} />
            </Link>
          </Container>
          <Container css={{ margin: "unset", padding: 0 }}>
            <Flex justify="between" align="center">
              <Text 
                as="h2"
                css={{
                  color: 'white',
                  display: "none",
                  '@bp2': {
                    display: "block"
                  }
                }}
              >
                Leonardo Guissi
              </Text>
              <Avatar size={3} fallback='LG' css={{
                marginLeft: 0,
                '@bp2': {
                  marginLeft: '10px'
                }
              }} />
            </Flex>
          </Container>
        </Flex>
      </Container>
    </Box>
  )
}