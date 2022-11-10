import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import SeeAllData from './SeeAllData';

const SeeAll = () => {
    const { loading } = useContext(AuthContext);

    const [seeAllData, setSeeAllData] = useState([]);
    useTitle('SeeAll');

    useEffect(() => {
        fetch('https://lens-queen-server.vercel.app/servicesAll')
            .then(res => res.json())
            .then(data => setSeeAllData(data))
    }, []);

    if(loading)
    {
        return <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }

    return (
        <div className='grid md:grid-cols-3 gap-4 mt-16'>
            {
                seeAllData.map(allData => <SeeAllData
                    key={allData._id}
                    allData={allData}></SeeAllData>)
            }
        </div>
    );
};

export default SeeAll;