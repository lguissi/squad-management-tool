import { 
  Box,
  Text
} from "@modulz/design-system"
import type { FC } from "react"
import { SortableTable } from '../SortableTable'
import data from '../../data/teamlist.json'

export const TeamList: FC = () => {
  return (
    <Box className="box-white">
      <Text as='h2' size='7' className="title-box">My teams</Text>
      {SortableTable(data)}
    </Box>
  )
}