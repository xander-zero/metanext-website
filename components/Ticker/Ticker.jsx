// import { useState, useRef, useEffect } from "react";

// const CounterUp = ({ start = 0, end }) => {
//   const [state, setState] = useState(null);
//   const ref = useRef();

//   const accumulator = end / 200;

//   const updateCounterState = () => {
//     if (ref.current < end) {
//       const result = Math.ceil(ref.current + accumulator);
//       if (result > end) return setState(end);
//       setState(result);
//       ref.current = result;
//     }
//     setTimeout(updateCounterState, 50);
//   };

//   useEffect(() => {
//     let isMounted = true;

//     if (isMounted) {
//       updateCounterState();
//     }

//     return () => (isMounted = false);
//   }, [start, end, updateCounterState]);

//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   );
// };

// export default CounterUp;
