import { 
  Box,
  Text
} from "@modulz/design-system"
import type { FC } from "react"
import { SortableTable } from '../SortableTable'
import data from '../../data/teamlist.json'

export const TeamList: FC = () => {
  return (
    <Box css={{
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '30px 0'
    }}>
      <Text as='h2' size='7' css={{
        color: '#552c8a',
        fontWeight: 600,
        padding: '0 20px 30px',
        borderBottom: '1px solid $gray5',
        mb: '10px'
      }}>My Teams</Text>
      {SortableTable(data)}
    </Box>
  )
}