import React from "react";
import DateTimeConverterCStoPST from "./cstToPST";
import DateTimeConverter from "./pstToCst";


export const DateTimeApp = ()=>{

    return(
        <>

     <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
  <DateTimeConverterCStoPST />
  <DateTimeConverter />
</div>
        
        
        </>
    )

}