import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import { ApolloProvider } from '@apollo/client';
import client from '../src/apolloClient';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApolloProvider client={client}>
      <Login/>
      </ApolloProvider>
    </>
  )
}

export default App
