import React from 'react'
import Search from './Search'
import { GoBell } from "react-icons/go";
import "./hello.css"


const carsNav = () => {
  return (
    <div>
      <div class="container-fluid p-3">
        <div class="row align-items-center">
            <div class="col-6">
                <h1 class="display-4">Places</h1>
            </div>
            <div class="col-6 text-end bell">
            <GoBell size={35}/>
            </div>
        </div>
    </div>
    <Search/>
</div>
  )
}

export default carsNav
