import { FC } from 'react'
import {
  Avatar,
  Container,
  Flex,
  Text
} from '@modulz/design-system'

export const UserMenu: FC = () => {
  return (
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
  )
}