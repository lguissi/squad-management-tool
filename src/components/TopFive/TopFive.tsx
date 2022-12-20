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
      background: '#e9e3e8',
      padding: '5px',
      borderRadius: '10px'
    }}>
      {teams.map((team: TeamAgeAverage) => {
        return (
          <Box key={team.id} css={{
            background: 'white',
            p: '15px 20px',
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
                <Text>{team.name}</Text>
                <Text css={{fontWeight: 600}}>{team.average}</Text>
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
      <Box className="box-white">
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