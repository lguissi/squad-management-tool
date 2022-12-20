import { FC } from 'react'
import { Box, Text, Flex, Grid } from "@modulz/design-system"
import data from '../../data/topfive.json'

type TeamAgeAverage = {
  id: number
  name: string
  average: number
}

const teamAge = (teams: Array<TeamAgeAverage>) => {
  return (
    <Box css={{
      marginBottom: '20px',
      background: '#e9e3e8',
      padding: '5px',
      borderRadius: '5px',
      '@bp1': {marginBottom: 0}
    }}>
      {teams.map((team: TeamAgeAverage) => {
        return (
          <Box key={team.id} css={{
            p: '10px 20px',
            background: 'white',
            marginBottom: '5px',
            borderRadius: '5px',
            '&:hover': {
              border: '1px solid #c50643',
            },
            '&:last-child': {
              marginBottom: 0
            }
            }}>
              <Flex justify='between' align='center'>
                <Text css={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  maxWidth: '75%'
                }}>{team.name}</Text>
                <Text css={{fontWeight: 600}}>{team.average.toFixed(1)}</Text>
              </Flex>
          </Box>
        )
      })}
    </Box>
  )
}

export const TopFive: FC = () => {
  const {highest, lowest} = data
  return (
    <>
      <Box className="rounded-box box-white">
        <Text as='h2' size='7' className="title-box">Top 5</Text>
        <Grid
          css={{
            px: '20px',
            columnGap: "$3",
            gridTemplateColumns: "repeat(1, 1fr)",
            "@bp1": { gridTemplateColumns: "repeat(2, 1fr)" }
          }}
        >
          <Box css={{
            marginBottom: '15px',
            '@bp1': {marginBottom: 0}
          }}>
            <Text as='h4' className='average-title'>Highest avg age</Text>
            {teamAge(highest)}
          </Box>
          <Box>
            <Text as='h4' className='average-title'>Lowest avg age</Text>
            {teamAge(lowest)}
          </Box>
        </Grid>
      </Box>
    </>
  )
}