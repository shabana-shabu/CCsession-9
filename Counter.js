import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(localStorage.getItem("count") || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button style={{ width:"100px",backgroundColor:"white",color:"black",fontWeight:"bolder"}}onClick={() => setCount(count + 1)}>+</button>
      <button style={{width:"100px",backgroundColor:"black",color:"white",fontWeight:"bolder"}}onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;