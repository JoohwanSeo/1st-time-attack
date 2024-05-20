import { useState } from "react";


const App = () => {
  
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0)
  
  const handleCountUp = (el) => {
    if ( !count) return ('숫자를 입력해 주세요')

    setCount(count => count + el)
  }
  const handleCountDown = (el) => {
    setCount(count => count - el)
  }

  const handleCountReset = () => {
    setCount('')
  }
console.log(useState)
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을
        <button onClick={handleCountUp}>더할게요</button>
        <button onClick={handleCountDown}>뺄게요</button>
        <button onClick={handleCountReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App