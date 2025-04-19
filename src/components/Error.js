import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1 className='p-4 m-4 border border-black'>Oops!!!!!!!!!!</h1>
            <h2>something went Wrong</h2>
            <h3> error{err.status} : {err.statusText}</h3>
        </div>
    )
}
export default Error;
