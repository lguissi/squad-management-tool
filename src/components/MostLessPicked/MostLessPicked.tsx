import { Box, Flex, Grid, Image, Text } from '@modulz/design-system'
import { FC } from 'react'
import data from '../../data/mostlesspicked.json'

const boxStyles = {
  padding: '20px',
  '@bp0': {marginBottom: 0}
}

const titleStyles = {
  mb: '20px',
  color: 'white',
  textAlign: 'center',
  fontSize: '$5',
  fontWeight: 700
}

const imageBoxStyles = {
  borderRadius: '50%',
  border: '4px solid #8e0875'
}

const imageStyles = {minWidth: '150px', mx: 0}

const pickRateStyles = {
  color: 'white',
  fontSize: '$5',
  fontWeight: 700,
  minWidth: '20%',
  borderBottom: '2px solid #d18bbc',
  pb: '5px'
}

export const MostLessPicked: FC = () => {

  const {most, less} = data

  return (
    <Box className='rounded-box box-fade' css={{
      padding: 0
    }}>
      <Grid
          css={{
            columnGap: 0,
            gridTemplateColumns: "repeat(1, 1fr)",
            "@bp1": { gridTemplateColumns: "repeat(2, 1fr)" }
          }}
        >
          <Box css={{
            ...boxStyles,
            borderRight: 0,
            borderBottom: '2px solid #aa5892',
            '@bp1': {
              borderRight: '2px solid #aa5892',
              borderBottom: 0
            }
          }}>
            <Text as='h2' css={titleStyles}>Most picked player</Text>
            <Flex justify='center' align='start'>
              <Box css={imageBoxStyles}>
                <Image src='user-profile-icon.svg' css={imageStyles}/>
              </Box>
              <Text as='h3' css={pickRateStyles}>{most.pickRate}%</Text>
            </Flex>
          </Box>

          <Box css={boxStyles}>
            <Text as='h2' css={titleStyles}>Less picked player</Text>
            <Flex justify='center' align='start'>
              <Box css={imageBoxStyles}>
                <Image src='user-profile-icon.svg' css={imageStyles}/>
              </Box>
              <Text as='h3' css={pickRateStyles}>{less.pickRate}%</Text>
            </Flex>
          </Box>
        </Grid>
    </Box>
  )
}