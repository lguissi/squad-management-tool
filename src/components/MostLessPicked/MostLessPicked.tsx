import { Box, Flex, Grid, Image, Text } from '@modulz/design-system'
import { CSS } from '@modulz/design-system/dist/stitches.config'
import { FC } from 'react'
import data from '../../data/mostlesspicked.json'

interface PlayerInterface {
  label: string
  css: CSS,
  pickRate: number
}

const boxStyles = {
  position: 'relative',
  zIndex: 1,
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

const Player = ({ label, css, pickRate } : PlayerInterface) => {
  return (
    <Box css={css}>
      <Text as='h2' css={titleStyles}>{label}</Text>
      <Flex justify='center' align='start'>
        <Box css={imageBoxStyles}>
          <Image src='user-profile-icon.svg' css={imageStyles}/>
        </Box>
        <Text as='h3' css={pickRateStyles}>{pickRate}%</Text>
      </Flex>
    </Box>
  )
}

export const MostLessPicked: FC = () => {

  const {most, less} = data

  return (
    <Box className='rounded-box box-fade' css={{
      padding: 0,
      position: 'relative'
    }}>
      <Grid
          css={{
            columnGap: 0,
            gridTemplateColumns: "repeat(1, 1fr)",
            "@bp1": { gridTemplateColumns: "repeat(2, 1fr)" }
          }}
        >
          <Player 
            label='Most picked player'
            pickRate={most.pickRate}
            css={{
            ...boxStyles,
            borderRight: 0,
            borderBottom: '2px solid #aa5892',
            '@bp1': {
              borderRight: '2px solid #aa5892',
              borderBottom: 0
            }
          }}/>

          <Player 
            label='Less picked player'
            pickRate={less.pickRate}
            css={boxStyles}
          />

          {/* Circle for aesthetics. */}
          <Box css={{
            position: 'absolute',
            width: '75px',
            height: '75px',
            borderRadius: '50%',
            border: '2px solid rgb(170, 88, 146)',
            left: '50%',
            top: '50%',
            zIndex: 0,
            transform: 'translate(-50%, -50%)'
          }}>
          </Box>
        </Grid>
    </Box>
  )
}