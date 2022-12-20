import { Container, Grid, Section, Box } from "@modulz/design-system"
import { FC } from "react"
import { TeamList } from "../../components/TeamList"
import { TopFive } from "../../components/TopFive"

export const Home: FC = () => {
  return (
    <Section size={4} css={{
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pb: '30px',
      maxWidth: '1300px',
      margin: '0 auto'
    }}>
      <Container size='4' css={{width: '100%'}}>
        <Grid
          css={{
            columnGap: "$3",
            gridTemplateColumns: "repeat(1, 1fr)",
            "@bp2": { gridTemplateColumns: "repeat(2, 1fr)" }
          }}
        >
          <Box className='left'>
            <TeamList />
          </Box>
          <Box className='right'>
            <TopFive />
          </Box>
        </Grid>
      </Container>
    </Section>
  )
}