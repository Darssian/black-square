import BlackSquare from './components/BlackSquare'

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <BlackSquare size={200} />
    </div>
  )
}

export default App
