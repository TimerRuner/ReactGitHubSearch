import React from "react"
import Navbar from "./component/Navbar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Profile } from "./pages/Profile"
import { Alert } from "./component/Alert"
import { HashRouter, Routes, Route } from "react-router-dom"
import { AlertState } from "./context/alert/alertState"
import { GithubState } from "./context/github/githubState"

function App() {
    return (
        <GithubState>
            <AlertState>
                <HashRouter>
                    <Navbar />
                    <div className="container pt-4">
                        <Alert alert={{ text: "Test Alert" }} />
                        <Routes>
                            <Route path="/" element={<Home />} exact />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/profile/:name"
                                element={<Profile />}
                            />
                        </Routes>
                    </div>
                </HashRouter>
            </AlertState>
        </GithubState>
    )
}

export default App
