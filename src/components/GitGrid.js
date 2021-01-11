import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitGridItem } from './GitGridItem';


export const GitGrid = ({category}) => {

const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            { <div className="card-grid">

           
               {
                   images.map( img  => (
                       < GitGridItem
                       key={img.id}
                       {...img}
                        />
                   ))
               }
           
            </div>}
        </>
    )
}
