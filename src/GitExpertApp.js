//rafc
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch']);



    return (
        <>
            <h2>Libreria Gifs</h2>
          <AddCategory setCategories={setCategories}/>
            <hr />
       
          <ol>
              {
                  //llamar los arreglos de categories
                  categories.map( category => (
                    <GitGrid 
                    key= {category}
                    category = {category } 
                    />
                  ))
              }
          </ol>
        </>
    )
}

