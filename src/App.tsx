import { Header } from "./components/Header"
import { globalStyles } from './components/globals/style'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@modulz/design-system"
import { Footer } from "./components/Footer"

function App() {
  globalStyles()
  return (
    <>
      <Header />
      <Box css={{
          minHeight: "95vh",
          height: "100%",
          pt: "$9",
          backgroundColor: "#f7f3f7"
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}

export default App
