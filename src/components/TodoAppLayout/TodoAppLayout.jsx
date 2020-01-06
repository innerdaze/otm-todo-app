import React from 'react'
import { Flex } from 'rebass'
import { majorScale, Heading } from 'evergreen-ui'

const TodoAppLayout = ({ title, headerAction, children }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    height="100vh"
    width={1}
    flex={1}
  >
    <Flex
      flex={[1, 0]}
      flexDirection="column"
      width={[1, 1, 1 / 2]}
      paddingY={[majorScale(2), majorScale(5)]}
      paddingX={[majorScale(2), majorScale(5)]}
    >
      <Flex alignItems="center" sx={{ mb: 3 }}>
        {headerAction}
        <Heading data-testid="todoAppLayout-title" marginLeft={majorScale(2)}>
          {title}
        </Heading>
      </Flex>
      {children}
    </Flex>
  </Flex>
)

export default TodoAppLayout
