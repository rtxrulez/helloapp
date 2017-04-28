var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var browserHistory = ReactRouter.browserHistory;

    class About extends React.Component{
        render(){
            return <h2>О сайте</h2>;
        }
    }
    class NotFound extends React.Component{
        render(){
            return <h2>Ресурс не найден</h2>;
        }
    }
    class Products extends React.Component{
        render(){
            return <h2>Товары</h2>;
        }
    }
    class Home extends React.Component{
        render(){
            return <h2>Главная</h2>;
        }
    }
    class Main extends React.Component{
        render(){
            return <div>
                    <h2>Добро пожаловать на сайт</h2>
                    {this.props.children}
                   </div>;;
        }
    }
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About} />
                <Route path="products" component={Products} />
                <IndexRoute component={Home} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById("container")
    )
