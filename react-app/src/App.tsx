import { useState } from 'react';

export default function App() {
  const [data, setData] = useState({
    a: 'a',
    b: 'b',
    state: {
      count: 0,
    }
  })

  const handleClick = () => {
    // setData((prevData) => {
    //   const data = {...prevData}
    //   data.state.count += 1
    //   return data
    // })

    setData((prevData) => {
      return {
        ...prevData,
        state: {
          ...prevData.state,
          count: prevData.state.count + 1
        }
      }
    })
  }
  

  return (
    <>
      <p>a: {data.a}</p>
      <p>b: {data.b}</p>
      <p>count: {data.state.count}</p>
      <br/>
      <button onClick={handleClick}>+1</button>
    </>
  );
}
