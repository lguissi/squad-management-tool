import { FC } from 'react'
import { 
  Box,
  Image,
  Link
} from "@modulz/design-system"

export const AddTeamButton: FC = () => {
  return (
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
  )
}