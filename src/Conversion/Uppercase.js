import React from 'react'
import  { useState } from 'react';

export const Uppercase = ({show}) => {
    const uppercase=()=>{
        let variable = title.toUpperCase();
        setTitle(variable);
        show("converted to uppercase successfully" , "success");
    }
    const CopyText=()=>{
       let gettext=document.getElementById("title");
     gettext.select();
       navigator.clipboard.writeText(gettext.value);
       show("Text copied  successfully" , "success");

        
    }
    const ExtraSpace=()=>{
       let br=title.split(/[ ]+/);
       setTitle(br.join(" "));
       show("Removed Extra space  successfully" , "success");
    }
    const Lowercase=()=>{
        let variable = title.toLowerCase();
        setTitle(variable);
        show("converted to Lowercase successfully" , "success");
    }
    const ClearText=()=>{
        
        setTitle(" ");
        show("Text cleared successfully" , "success");
    }
    const changetouppere =(e)=>{
   setTitle(e.target.value);
    }
    const[title , setTitle] = useState();
    
    


    const mystyle ={
        marginLeft :"150px",
        width :"800px",
        border :"2px solid black",
        fontStyle :"bold",
        borderRadius :" 0 15px 15px 15px  ",
    };
    const Mystyle ={
        marginLeft :"400px",
        marginTop :"50px",
        fontSize:"50px",
        fontWeigth:"bold",
        color:"white"
    };
  return (
  
    <div classname=" container my-3">
        <h3 className="text" style={Mystyle}>Text Analysis</h3>
        
        <textarea style={mystyle} value={title} placeholder='Enter your text here......' onChange={changetouppere} id="title" rows="10"  />
      <br />
     
        <button type="button"   style={{marginLeft :"300px",background:"linear-gradient(to right, #17C3B2 , skyblue )", borderRadius :"5px"}} 
        className='btn-btn-success' onClick={uppercase} >
            ToUpperCase</button>
            <button type="button"   style={{marginLeft :"8px",background:"linear-gradient(to right, #17C3B2 , skyblue )", borderRadius :"5px"}} 
        className='btn-btn-success' onClick={Lowercase} >
            ToLowerCase</button>
            <button type="button"   style={{marginLeft :"8px",background:"linear-gradient(to right, #17C3B2 , skyblue )",  borderRadius :"5px"}} 
        className='btn-btn-success' onClick={ClearText} >
           ClearText</button>
           <button type="button"   style={{marginLeft :"8px",background:"linear-gradient(to right, #17C3B2 , skyblue )", borderRadius :"5px"}} 
        className='btn-btn-success' onClick={CopyText} >
           CopyText</button>
           <button type="button"   style={{marginLeft :"8px", background:"linear-gradient(to right, #17C3B2 , skyblue )", borderRadius :"5px"}} 
        className='btn-btn-success' onClick={ExtraSpace} >
           ExtraSpace</button>
    </div>
    
  )
}
 
