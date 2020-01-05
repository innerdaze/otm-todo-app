import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '@rebass/preset'
import TodoApp from '../TodoApp'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <TodoApp />
    // </ThemeProvider>
  )
}

export default App
