import { Container } from "@mui/material";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./pages/Gallery/Gallery";
import './style.css'
function App() {
    return (
        <div className="app" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar/>
            <Container fixed>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/news" component={News} />
                    <Route path="/news/:id" component={NewsDetail} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="*" component={() => <Redirect to="/" />} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
