import React, { useCallback } from 'react'
import { useLocation, useHistory, Switch, Route } from 'react-router-dom'
import TodoApp from '../TodoApp'
import EditTodoForm from '../EditTodoForm'
import AddTodoForm from '../AddTodoForm'

const AddWrapper = React.memo(({ match }) => {
  const history = useHistory()

  const goHome = useCallback(() => history.push('/'), [history])

  return <AddTodoForm onSave={goHome} />
})

const EditWrapper = React.memo(({ match }) => {
  const history = useHistory()

  const goHome = useCallback(() => history.push('/'), [history])

  return <EditTodoForm dataId={match.params.id} onSave={goHome} />
})

const TodoSwitch = () => {
  const location = useLocation()

  return (
    <Switch location={location}>
      <Route exact path="/" component={TodoApp} />
      <Route path="/add" component={AddWrapper} />
      <Route path="/edit/:id" component={EditWrapper} />
    </Switch>
  )
}

export default TodoSwitch
