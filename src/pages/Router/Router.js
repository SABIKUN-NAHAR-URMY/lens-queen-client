import { createBrowserRouter } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Main from '../Main/Main';
import MyReviews from '../MyReviews/MyReviews';
import SeeAll from '../Services/SeeAll/SeeAll';
import DetailsCard from '../Services/ServiceCard/DetailsCard';
import Signup from '../Signup/Signup';

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
                path:'/seeAll',
                element: <SeeAll></SeeAll>
            },
            {
                path:'/details/:id',
                element: <DetailsCard></DetailsCard>,
                loader: ({params}) => fetch(`http://localhost:5000/servicesAll/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            }
        ]
    }
])
