import { useState, useCallback } from 'react'
import {
  Button,
  Flex,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Thead,
  Tr
} from "@modulz/design-system"
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'

type Header = {
  key: string
  label: string
}

type Team = {
  id: number
  name: string
  description: string
}

type SortOrder = 'asc' | 'desc'

const sortData = ({tableData, sortKey, reverse}: {
  tableData: Array<Team>
  sortKey: string
  reverse: boolean
}) => {

  const sortedData = tableData.sort((a: Team , b: Team) => {
    return a[sortKey as keyof Team] > b[sortKey as keyof Team] ? 1 : -1
  })

  return reverse ? sortedData.reverse() : sortedData
}

const SortableButton = () => {
  return (
    <>
      <Button
      css={{
        boxShadow: 'none',
        '&:hover, &:active, &:focus': {
          boxShadow: 'none',
          backgroundColor: 'transparent'
        },
      }}>
      <Image src='/sort.svg' css={{
        width: '10px',
        height: '10px',
        filter: 'revert'
      }} />
      </Button>
    </>
  )
}

const DeleteEditButtons = ({ teamId }: {teamId: number}) => {
  return (
    <Flex
      className='del-edit-button'
      justify='between'
      align='center'
      css={{display: 'none'}}
    >
      <Link as='a' title='Delete' css={{color: 'inherit'}}>
        <TrashIcon className='icon icon-delete'/>
      </Link>
      <Link href={`#/team/${teamId}`} as='a' title='Edit' css={{color: 'inherit'}}>
        <Pencil1Icon className='icon icon-edit'/>
      </Link>
    </Flex>
  )
}

export const SortableTable = (data: Array<Team>) => {

  const [sortKey, setSortKey] = useState<string>('name')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const headers = [
    { key: 'name', label: 'Name'},
    { key: 'description', label: 'Description'},
  ]

  const sortedData = useCallback(() => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}), [data, sortKey, sortOrder])

  const changeSort = (key: string) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setSortKey(key)
  }

  const columnStyles = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    p: '20px 10px'
  }

  return (
    <>
      <Table css={{px: '10px'}}>
        <Thead>
          <Tr>
            {headers.map((row: Header) => {
              return (
                <Td key={row.key} css={{
                  px: '10px',
                  width: row.key === 'name' ? '35%' : '65%',
                  '&:active, &:focus': {
                    background: '$gray5'
                  }
                }}
                onClick={() => changeSort(row.key)}
                >
                  <Flex justify='between' align='center' css={{color: 'black', fontWeight: 600}}>
                    {row.label}
                    <SortableButton />
                  </Flex>
                </Td>
              )
            })}
          </Tr>
        </Thead>

        <Tbody>
          {sortedData().map((team: Team) => {
            return (
              <Tr key={team.id} css={{
                borderRadius: '15px',
                '&:hover': {
                  backgroundColor: '#f7eef7',
                  color: '#bf6296',
                  '.del-edit-button': {
                    '@bp1': {
                      display: 'flex'
                    }
                  }
                }
              }}>
                <Td css={{
                  ...columnStyles,
                  borderTopLeftRadius: '5px',
                  borderBottomLeftRadius: '5px',
                }}>{team.name}</Td>
                <Td css={{
                  ...columnStyles,
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px',
                }}>
                  <Flex justify='between' align='center'>
                    {team.description}
                    <DeleteEditButtons teamId={team.id} />
                  </Flex>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}