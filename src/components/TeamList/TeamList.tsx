import { 
  Box,
  Text
} from "@modulz/design-system"
import type { FC } from "react"
import { AddTeamButton } from "../AddTeamButton"
import { SortableTable } from '../SortableTable'
import data from '../../data/teamlist.json'

export const TeamList: FC = (props) => {
  return (
    <Box className="rounded-box box-white" css={{position: 'relative'}}>
      <Text as='h2' size='7' className="title-box">My teams</Text>
      {SortableTable(data)}
      <AddTeamButton />
    </Box>
  )
}