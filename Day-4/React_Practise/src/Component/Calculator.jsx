import React, { useState } from 'react'
import "../Component/calculator.css"


const btnArray = [
  "CE", "C", "%", "/","7","8","9", "*", "4","5","6", "-","1","2","3", "+","0",".", "="];
 
const Calculator = () => {
 
  const [value , setValue] = useState(""); 
  const [operator, setOperator] = useState("");

   const handleButtonClick = (btn) => {
          if(btn  =="%" || btn == "/" || btn == "*" || btn == "-" || btn == "+"  ){
             let newArr  = value.split("")
             newArr[newArr.length - 1] == btn ?newArr[newArr.length - 1]= btn:value+btn; // Replace the last character with the operator
              
            }
         let val = value + btn;
         setValue(val);
         console.log(btn)
         if(btn == "C"){
          setValue("0");
         }  
   }

  return (
    <div id='main-calculator' >
      <div id='calculator-input' >
        <input    type="text" name="" id="" value={value}  readOnly />
      </div>
      <div id="calculator-btn" >
       {
        <>
          {
            btnArray.map((btn, index) => {
              return (
                <button key={index} onClick={() => {
                  if (btn === "=") {
                    // Handle calculation logic here
                    let result = eval(value)
                    // setValue(result.toString());
                    console.log(result)
                    setValue(result.toString());
                  } else if (btn === "C") {
                    // Handle clear logic here
                    setValue("");
                  } else if (btn === "CE") {
                    // Handle clear entry logic here
                    let newVal = value.split("");
                    newVal.pop(); // Remove the last character
                    newVal = newVal.join("");
                    console.log(newVal)
                    setValue(newVal === "0" ? "0" : newVal);
                  
                  } else {
                    // Handle other button clicks
                       handleButtonClick(btn);

                  }
                }}  >
                  {btn}
                </button>
              )
            })
          }
        </>
       }  
      </div>
    </div>
  )
}

export default Calculator
