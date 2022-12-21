import { Routes, Route } from "react-router-dom"
import { Box } from "@modulz/design-system"
import { globalStyles } from './globals/style'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { AddEditTeam } from './pages/AddEditTeam'

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
          <Route path="/team/:teamId" element={<AddEditTeam />} />
          <Route path="/team/add" element={<AddEditTeam />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}

export default App
