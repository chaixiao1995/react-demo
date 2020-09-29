import React, { useState, useRef } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  const inputEl = useRef();
  const clickBtn = () => {
    console.log(inputEl, inputEl.current.value)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <hr />
      <input type="text" ref={inputEl} />
      <button onClick={clickBtn}>点击</button>
    </div>
  )
}
export default Example;