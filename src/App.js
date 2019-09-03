import React, {useState, useEffect} from 'react';
import Concert from './Concert';
export default props => {
    const [data, setData] = useState(props.data || concertData);
    const [counter, setCounter] = useState(1);
    //console.log(data)
    const testFunc = ()=>{
        console.log("greetings from testFunc!")
        setCounter(counter+1)
    }
    return(
        <div>
            Hér eru tónleikar:
            <button onClick={testFunc}>count</button>
            {counter}
            {data.results.map((concert,i)=><Concert key={i} data={concert} token={data.token}></Concert>)}
        </div>
    )
};