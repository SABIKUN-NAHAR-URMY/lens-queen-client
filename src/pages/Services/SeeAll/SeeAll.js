import React, { useEffect, useState } from 'react';
import SeeAllData from './SeeAllData';

const SeeAll = () => {
    const[seeAllData, setSeeAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesAll')
            .then(res => res.json())
            .then(data => setSeeAllData(data))
    }, []);

    
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