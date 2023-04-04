
import React from 'react';
import './filterJob.scss';

function FilterJob({filter, index, handleDelete}) {
    return(
            <div className = "filter-job">
                <span className='text-filter'>{filter}</span>
                <span className="close-filter" onClick ={()=>handleDelete(index)}> x </span>
            </div>
    )
}

export default FilterJob;