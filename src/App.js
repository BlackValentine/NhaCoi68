import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import routes from './routes'

function App() {

    const showContent = () => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>
    }

    return (
        <Router>
            <Header />
            <div>
                {showContent(routes)}
            </div>
            <Footer />
        </Router>
    );
}

export default App;
