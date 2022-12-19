import { Header } from "./components/Header"
import { globalStyles } from './components/globals/style'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@modulz/design-system"

function App() {
  globalStyles()
  return (
    <>
      <Header />
      <Box css={{
          minHeight: "100vh",
          height: "100%",
          pt: "$9",
          backgroundColor: "#f7f3f7"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
