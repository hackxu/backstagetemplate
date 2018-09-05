import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import store from "../store/index"

import loginPage from "../pages/login";
import HomePage from '../pages/homeLayout'
// import SchoolListPage from "../pages/SchoolList"
// import AddSchoolPage from "../pages/AddSchool"
// import ArticleListPage from "../pages/ArticleList"
// import ArticleReviewListPage from "../pages/ArticleReviewList"
// import ContorllerLogPage from "../pages/ContorllerLog"
// import ApplyListPage from '../pages/ApplyList'

var browserHistory = createHistory();
const navArr = [
    {
        routepath: "/czx/TibetArea",
        icon: "",
        pathname: "西藏区域",
        key: "TibetArea",
        component: "TibetAreaPage",
        hideInMenu: false
    },
    {
        routepath: "/czx/TibetArea/Add",
        icon: "",
        pathname: "西藏区域",
        key: "TibetArea",
        component: "TibetAreaPageAdd",
        hideInMenu: true
    },
    {
        routepath: "/czx/Attractions",
        icon: "",
        pathname: "景点",
        key: "Attractions",
        component: "AttractionsPage",
        hideInMenu: false
    },
    {
        routepath: "/czx/Attractions/Add",
        icon: "",
        pathname: "景点",
        key: "Attractions",
        component: "AttractionsPageAdd",
        hideInMenu: true
    },
    {
        routepath: "/czx/AttractionsDistance",
        icon: "",
        pathname: "景点距离",
        key: "AttractionsDistance",
        component: "AttractionsDistancePage",
        hideInMenu: false
    },
    {
        routepath: "/czx/AttractionsDistance/Add",
        icon: "",
        pathname: "景点距离",
        key: "AttractionsDistance",
        component: "AttractionsDistancePageAdd",
        hideInMenu: true
    },
    {
        routepath: "/czx/TimeArea",
        icon: "",
        pathname: "区域耗时",
        key: "TimeArea",
        component: "TimeAreaPage",
        hideInMenu: false
    },
    {
        routepath: "/czx/TimeArea/Add",
        icon: "",
        pathname: "区域耗时",
        key: "TimeArea",
        component: "TimeAreaPageAdd",
        hideInMenu: true
    }
]

class Routerdiv extends Component {

    render() {
        // const { children } = this.props
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/czx/login" component={loginPage}></Route>
                    <PrivateRoute exact path="/" component={() => <Redirect to="/czx"></Redirect>}></PrivateRoute>
                    {/*<Route exact path="/" component={() => <Redirect to="/czx/page/"/>}></Route>*/}
                    <Route path="/czx" component={HomePageRouter}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </Router>
        )
    }
}

const HomePageRouter = ({match, history}) => (
    <HomePage key="homepage" history={history}>
        <Switch>
            <PrivateRoute exact path={match.url}
                          component={() => <Redirect to="/czx/School/SchoolList"/>}></PrivateRoute>
            {store.RouterList.map((route, i) => {
                return <RouteWithSubRoutes  {...route} />
            })}
            <PrivateRoute component={NoMatch}></PrivateRoute>

        </Switch>
    </HomePage>

)


const NoMatch = ({location}) => (
    <div>
        <h3>404</h3>
    </div>
)

const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={props => {
        return store.isLogin ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/czx/login'
            }}/>
        )
    }}/>
)

const RouteWithSubRoutes = route => (
    <Route
        path={route.routepath}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props}  />
        )}
    />
);
// const CheckLoginRoute = ({component: Component, ...rest}) => (
//     <Route {...rest} render={props => {
//         return store.isLogin ? (
//             <Redirect to={{
//                 pathname: '/page'
//             }}/>) : (
//             <Component {...props}></Component>
//             // <Redirect to={{
//             //     pathname: '/login'
//             // }}/>
//         )
//     }}/>
// )
export default Routerdiv
