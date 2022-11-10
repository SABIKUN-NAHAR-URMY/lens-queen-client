import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Main from '../Main/Main';
import MyReviews from '../MyReviews/MyReviews';
import ReviewEdit from '../MyReviews/ReviewEdit';
import SeeAll from '../Services/SeeAll/SeeAll';
import DetailsCard from '../Services/ServiceCard/DetailsCard';
import Signup from '../Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/seeAll',
                element: <SeeAll></SeeAll>
            },
            {
                path:'/details/:id',
                element: <DetailsCard></DetailsCard>,
                loader: ({params}) => fetch(`https://lens-queen-server.vercel.app/servicesAll/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/editReview/:id',
                element: <ReviewEdit></ReviewEdit>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            }
        ]
    }
])
