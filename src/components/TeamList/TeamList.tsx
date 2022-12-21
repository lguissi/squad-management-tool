import { 
  Box,
  Image,
  Link,
  Text
} from "@modulz/design-system"
import type { FC } from "react"
import { SortableTable } from '../SortableTable'
import data from '../../data/teamlist.json'

export const TeamList: FC = (props) => {
  return (
    <Box className="rounded-box box-white" css={{position: 'relative'}}>
      <Text as='h2' size='7' className="title-box">My teams</Text>
      {SortableTable(data)}
      <Link href="/team/add" title="Add Team" variant="subtle">
        <Box className='box-fade' css={{
          position: 'absolute',
          top: 30,
          right: '20px',
          borderRadius: '10px',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0px 0px 14px 2px #f58fbd'
            }
        }}>
        <Image src='add.svg' css={{
          width: '35px',
          height: '35px',
          margin: 0
        }} />
        </Box>
      </Link>
    </Box>
  )
}