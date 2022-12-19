import { 
  Box
} from "@modulz/design-system"
import type { FC } from "react"
import { SortableTable } from '../SortableTable'
import data from '../../data/teamlist.json'

export const TeamList: FC = () => {
  return (
    <Box>
      {SortableTable(data)}
    </Box>
  )
}