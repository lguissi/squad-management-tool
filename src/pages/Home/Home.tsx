import { Container, Flex, Grid, Section } from "@modulz/design-system"
import { FC } from "react"
import { TeamList } from "../../components/TeamList"

export const Home: FC = () => {
  return (
    <Section size={4} css={{
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pb: '30px',
      maxWidth: '1920px',
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
          <TeamList />
          <TeamList />
        </Grid>
      </Container>
    </Section>
  )
}