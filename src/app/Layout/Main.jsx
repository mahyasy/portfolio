'use client'

import Navbar from '../../Components/Navbar'
import { useContext } from 'react';
import { WrapperContext } from '../Context/WrapperComponent';

const Main = () => {
  const {Tabname} = useContext(WrapperContext)
  return (
    <div >
       
        {Tabname.map((tab) => (
        <section className="h-[400px] p-20 border border-white" id={tab}>
          {tab}
        </section>
      ))}
       
    </div>
  )
}

export default Main