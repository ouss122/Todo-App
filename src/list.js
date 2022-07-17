import {  faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({text,remove,complete,isCompleted}) => {
  return ( <div className="flex justify-center mb-3  items-center" >
    <p className={"bg-gray-200 w-2/3 rounded-md  py-1 px-2 mr-1 transition duration-200 "+(isCompleted?'line-through':'')}>
       {text}
    </p>
    <div >
      <button onClick={()=>{complete(text)}}><FontAwesomeIcon className={"text-3xl bg-green-500 py-1 px-2 rounded-md duration-500 transition "+(isCompleted?'hidden':'')} icon={faCheck}  /></button>
      <button onClick={()=>{remove(text)}}><FontAwesomeIcon className="text-3xl bg-red-500 py-1 px-2 rounded-md" icon={faRemove}/></button>
    </div>
  </div> );
}
 
export default List;