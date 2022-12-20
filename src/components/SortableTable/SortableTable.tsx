import { useState, useCallback, MouseEventHandler } from 'react'
import { Table, Thead, Tbody, Tr, Td, Button, Flex, Image } from "@modulz/design-system"

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
          background: 'none'
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

  return (
    <>
      <Table css={{px: '10px'}}>
        <Thead>
          <Tr>
            {headers.map((row: Header) => {
              return (
                <Td key={row.key} css={{
                  width: row.key === 'name' ? '35%' : '65%',
                  '&:active, &:focus': {
                    background: '$gray8'
                  }
                }}
                onClick={() => changeSort(row.key)}
                >
                  <Flex justify='between' align='center'>
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
              <Tr key={team.id}>
                <Td>{team.name}</Td>
                <Td>{team.description}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}