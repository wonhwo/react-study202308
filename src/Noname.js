import { render } from "@testing-library/react";
import React from "react";

function Noname() {

    return(
        <div className='noname'>
        <input type='text'/>
        <p>
          오늘은 태풍이 와서 비가 많이 내렸다.<br/>
          그래서 만사가 귀찮다.<br/>
          집에 가고싶다.
        </p>
      </div>
    )
}
export default Noname;