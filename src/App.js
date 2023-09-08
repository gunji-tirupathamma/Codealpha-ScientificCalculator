import React, {useState,useEffect}from 'react'

import {Parser}  from 'expr-eval'

import { MainContainer,
         Heading,
         Calculator,
         Display,
         Input,
         Output,
         ButtonsContainer,
         Button,
         NumButton
       } from './StyledComponents'

const App=() =>{

  const colors=["red","blue","green","purple"]
  const fonts = ["Arial, sans-serif", "Georgia, serif", "Verdana, sans-serif"];
  const [currentIndex,setCurrentIndex]=useState(0)
  const [input,setInput]=useState('')
  const [output,setOutput]=useState('')
  const [isButtonOn,setIsButtonOn]=useState(false)


  useEffect(()=>{
    const IntervelId=setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex + 1) % colors.length)
    },2000)

    return ()=> clearInterval(IntervelId)
  },[])

  const currentColor=colors[currentIndex]
  const currentFont=fonts[currentIndex]

  const headingstyle={
    color: currentColor,
    fontFamily: currentFont
  }

  const evalutionValue = () => {
    try {

      let parsedInput = input.replace(/(\d+)°/g, (_, deg) => {
        const rad = (deg * Math.PI) / 180;
        return `Math.PI*${rad}`;
      });


      const customFunctions = {
        log: Math.log10,
        ln: Math.log,
        exp:  Math.exp,
        sin: (x)=>{
          return Math.sin(x)
        },
        cos: (x)=>{
          return Math.cos(x)
        },
        tan: (x)=>{
          return Math.tan(x)
        },
        sqrt: Math.sqrt,
        "!": (n) => {              
              let result = 1;
              for (let i = 2; i <= n; i++) {
                result *= i;
              }
              return result;
            },
      };

      const parser = new Parser({ functions: customFunctions });
      const result = parser.evaluate(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const claerAll=()=>{
    setInput('')
    setOutput('')
  }

  const displayContainer=()=>{
    setIsButtonOn(!isButtonOn)
    setInput('')
    setOutput('')
  }

  return (
    <MainContainer>
        <Heading style={headingstyle}>Scientific Calculator</Heading>
        <Calculator>
          <Display >
            {isButtonOn ? <Input type="text" name="input" onChange={(e)=>e.target.value()} value={input}/> : null}       
                        
            {isButtonOn ? <Output>{output}</Output> : null}
            
          </Display>
          <ButtonsContainer>
            <Button onClick={()=>handleButtonClick("tan(")}>tan</Button>
            <Button onClick={()=>handleButtonClick("sin(")}>sin</Button>
            <Button onClick={()=>handleButtonClick("cos(")}>cos</Button>
            <Button onClick={()=>setInput(input+"3.14159265359")}>π</Button>
            <NumButton style={{backgroundColor: "#f74ac1", width: '50px'}}  onClick={displayContainer}>ON</NumButton>
            <br/>
            <Button onClick={()=>handleButtonClick("log(")}>log</Button>
            <Button onClick={()=>setInput(input+"2.71828")}>e</Button>
            <Button onClick={()=>handleButtonClick("^")}>^</Button>
            <Button onClick={()=>handleButtonClick("(")}>(</Button>
            <Button onClick={()=>handleButtonClick(")")}>)</Button>
            <br/>
            <Button onClick={()=>handleButtonClick("Inv(")}>Inv</Button>
            <Button onClick={()=>handleButtonClick("exp(")}>EXP</Button>
            <Button onClick={()=>handleButtonClick("ln(")}>ln</Button>
            <Button onClick={()=>handleButtonClick("sqrt(")}>√</Button>
            <Button onClick={()=>handleButtonClick("!")}>x!</Button>
            <br/>
            
            <NumButton onClick={claerAll} style={{backgroundColor: "Red"}}>Ac</NumButton>
            <NumButton onClick={()=>setInput(input.slice(0,-1))} style={{backgroundColor: "Blue"}}>Del</NumButton>
            <NumButton onClick={()=>handleButtonClick("%")} style={{backgroundColor: "#c72d16"}}>%</NumButton>
            <NumButton onClick={()=>handleButtonClick("*")} style={{backgroundColor: "#c72d16"}}>*</NumButton>
            <br/>
            <NumButton onClick={()=>handleButtonClick("9")}>9</NumButton>
            <NumButton onClick={()=>handleButtonClick("8")}>8</NumButton>
            <NumButton onClick={()=>handleButtonClick("7")}>7</NumButton>
            <NumButton onClick={()=>handleButtonClick("/")} style={{backgroundColor: "#c72d16"}}>/</NumButton>
            <br/>
            <NumButton onClick={()=>handleButtonClick("6")}>6</NumButton>
            <NumButton onClick={()=>handleButtonClick("5")}>5</NumButton>
            <NumButton onClick={()=>handleButtonClick("4")}>4</NumButton>
            <NumButton onClick={()=>handleButtonClick("-")} style={{backgroundColor: "#c72d16"}}>-</NumButton>
            <br/>
            <NumButton onClick={()=>handleButtonClick("3")}>3</NumButton>
            <NumButton onClick={()=>handleButtonClick("2")}>2</NumButton>
            <NumButton onClick={()=>handleButtonClick("1")}>1</NumButton>
            <NumButton onClick={()=>handleButtonClick("+")} style={{backgroundColor: "#c72d16"}}>+</NumButton>
            <br/>
            <NumButton onClick={()=>handleButtonClick("0")}>0</NumButton>
            <NumButton onClick={()=>handleButtonClick(".")}>.</NumButton>
            <NumButton style={{backgroundColor: "Green"}} onClick={()=>setInput(input+output)}>Ans</NumButton>
            <NumButton onClick={evalutionValue}  style={{backgroundColor: "#c72d16"}}>=</NumButton>
          </ButtonsContainer>

        </Calculator>
    </MainContainer>
  )
}

export default App

