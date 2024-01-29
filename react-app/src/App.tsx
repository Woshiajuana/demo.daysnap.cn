import { useState } from "react";
import { flushSync } from "react-dom";
import "./App.css";

function App1() {
  console.log("start App render");
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        flushSync(() => {
          setCount((c) => c + 1);
        });
        console.log("count1: ", count);
        flushSync(() => {
          setCount((c) => c + 2);
        });
        console.log("count2: ", count);
      }}
    >
      {count}
    </button>
  );
}
function App(){
  console.log('start App render111')
  let syncUpdatedCount
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={()=>{
      flushSync(()=>{
          setCount(c=> {
            syncUpdatedCount = c + 1
            return syncUpdatedCount
          });
      })
      console.log('count1: ', count);
      flushSync(()=>{
          setCount(c=> {
            syncUpdatedCount = c + 2
            return syncUpdatedCount
          });
      })
      console.log('count2: ', count);
    }}>
    {count}
    </button>
  )
}
  
export default App;
