import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Main/Main';
import SeeAll from '../Services/SeeAll/SeeAll';
import DetailsCard from '../Services/ServiceCard/DetailsCard';

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
            }
        ]
    }
])
