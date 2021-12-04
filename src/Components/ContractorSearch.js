import React from 'react';
import SearchBar from './SearchBar';
import Contractor from './Contractor';
import YelpFetch from './YelpFetch';

function ContractorSearch() {
    return (
        <div>
           <SearchBar/>
           <Contractor/> 
           <YelpFetch />
        </div>
    )
}

export default ContractorSearch
