import { Box, Text } from '@modulz/design-system'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <Box as="footer"  css={{
      height: '5vh',
      minHeight: '$1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e9e3e9'
    }}>
      <Text as='p'>
          2022 - All rights reserved
        </Text>
    </Box>
  )
}