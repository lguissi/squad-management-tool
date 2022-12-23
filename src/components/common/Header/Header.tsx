import { Box, Container, Flex } from "@modulz/design-system"
import { FC } from "react"
import { headerStyles } from "./headerStyles"
import { CompanyLogo } from "../CompanyLogo"
import { UserMenu } from "../UserMenu"

export const Header: FC = () => {
  headerStyles()
  return (
    <Box as="header">
      <Container size={4} css={{
        padding:"0 15px",
        '@bp2': {
          padding:"0 25px"
        }
      }}>
        <Flex align="center" justify="between" css={{ height: "50px" }}>
          <CompanyLogo />
          <UserMenu />
        </Flex>
      </Container>
    </Box>
  )
}