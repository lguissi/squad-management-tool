import { useState, useCallback, MouseEventHandler } from 'react'
import { Table, Thead, Tbody, Tr, Td, Button } from "@modulz/design-system"

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

const SortableButton = ({sortOrder, columnKey, sortKey, onClick} :{
  sortOrder: SortOrder
  columnKey: string
  sortKey: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <>
      <Button onClick={onClick}>{(sortKey === columnKey && sortOrder === 'asc') ? '▲' : '▼'}</Button>
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
      <Table css={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '30px 10px'
      }}>
        <Thead>
          <Tr>
            {headers.map((row: Header) => {
              return (
                <Td key={row.key}>
                  {row.label}
                  <SortableButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{sortOrder, sortKey}}
                  />
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