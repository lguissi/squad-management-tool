import {
  Container,
  Flex,
  Link,
  Text
} from '@modulz/design-system'
import { FC } from 'react'

export const CompanyLogo: FC = () => {
  return (
    <Container css={{ margin: "unset", padding: 0 }}>
      <Link href="/" title="Home" variant="subtle" css={{
        color: 'white',
        '&:link': {textDecorationLine: 'none'}
      }}>
      <Flex align='center'>
        <Container className="header-logo" css={{padding: 0}} />
        <Text as='h2' css={{
        marginLeft: '15px',
        fontWeight: 600
        }}>Squad Management Tool</Text> 
      </Flex>
      </Link>
      
    </Container>
  )
}