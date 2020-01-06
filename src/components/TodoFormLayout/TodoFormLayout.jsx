import React, { useState, useCallback } from 'react'
import { Flex, Box } from 'rebass'
import { Button, TextInputField } from 'evergreen-ui'

const TodoFormLayout = ({
  onSaveClick,
  onDeleteClick,
  formData = { text: '' }
}) => {
  const [todoText, setTodoText] = useState(formData.text)

  const handleTextFieldChange = e => {
    setTodoText(e.target.value)
  }

  const handleSaveClick = useCallback(() => onSaveClick({ text: todoText }), [
    onSaveClick,
    todoText
  ])

  const handleDeleteClick = useCallback(() => onDeleteClick(formData.id), [
    formData.id,
    onDeleteClick
  ])

  return (
    <Flex
      flex={1}
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex width={[1, 3 / 4]} sx={{ mr: [0, 2] }}>
        <TextInputField
          label="Todo"
          onChange={handleTextFieldChange}
          value={todoText}
          width="100%"
        />
      </Flex>
      <Flex flexDirection={['column', 'row-reverse']} width={[1, 'auto']}>
        {formData.text && (
          <Box
            sx={{
              mb: [2, 0],
              ml: [0, 2]
            }}
          >
            <Button
              data-testid="todoFormLayout-button-delete"
              width="100%"
              justifyContent="center"
              iconBefore="trash"
              intent="danger"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Box>
        )}
        <Box>
          <Button
            data-testid="todoFormLayout-button-save"
            appearance="primary"
            width="100%"
            justifyContent="center"
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default TodoFormLayout
