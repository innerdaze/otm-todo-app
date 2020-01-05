import React, { useState, useCallback } from 'react'
import { Box, Flex } from 'rebass'
import { majorScale, Pane, Heading, Position } from 'evergreen-ui'
// import { Grid, Segment, Container, Header } from 'semantic-ui-react'
import TodoList from '../TodoList'
import EditTodoForm from '../EditTodoForm'

export default () => {
  const [currentlyEditing, setCurrentlyEditing] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  const handleRowSelect = useCallback(setCurrentlyEditing, [])

  return (
    <>
      {/* <AddTodoForm
        isShown={isCreating}
        position={Position.TOP}
      /> */}
      <EditTodoForm
        isShown={Boolean(currentlyEditing)}
        data={currentlyEditing}
        position={Position.TOP}
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        height="100vh"
        padding={majorScale(5)}
        width={[1]}
      >
        <Box width={[1, 1, 1 / 2]}>
          <Pane>
            <Heading>Title</Heading>
            <div>Select Todo</div>
            <div>Add Todo</div>
            <TodoList onRowSelect={handleRowSelect} />
            <div>Total</div>
          </Pane>
        </Box>
      </Flex>
    </>
  )
}
