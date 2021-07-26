import {useCallback, useRef, useState, useEffect} from "react";
import useDateNow from './hooks/useDateNow'

// useMemo, useRef
// useDateNow - текущее Date.now()
// useRenderCounter - подсчитывает количество рендрингов компонента

// const useCallback = (fun, dependencies) => {
//   const [callback, setCallback] = useState(fun);
//   useEffect(() => setCallback(fun), dependencies);
//   return callback;
// };

const useRenderCounter = (start) => {

    let renderCount = useRef(start)

    useEffect(() => {
        renderCount.current++
    })

    return [renderCount.current]
}


const useCalcate = (initValue = 0) => {
    const [count, setCount] = useState(initValue);

    const dec = useCallback((numb) => setCount((x) => x - numb), []);
    const inc = useCallback((numb) => setCount((x) => x + numb), []);

    return [count, dec, inc];
};

export default function App() {
    const [count, dec, inc] = useCalcate(100500);

    const [renderCount] = useRenderCounter(1);
    const [date] = useDateNow()



    return (
        <div className="App">
            <h1>{renderCount}</h1>
            <h2>{date}</h2>
            <button onClick={() => dec(5)}>-5</button>
            {" "}
            <button onClick={() => dec(1)}>-1</button>
            {count}{" "}
            <button onClick={() => inc(1)}>+1</button>
            {" "}
            <button onClick={() => inc(5)}>+5</button>
        </div>
    );
}
