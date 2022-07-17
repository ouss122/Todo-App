
import  List  from "./list";
import { useState } from 'react';
function App() {
  function complete(e){
    setCompleted([...completed,e])
    window.localStorage.completed=JSON.stringify([...completed,e])
  }
  function remove(e){
    if (completed.includes(e)){
      setCompleted(completed.filter((element)=>element!==e))
      window.localStorage.completed=JSON.stringify(completed.filter((element)=>element!==e))

    }
    setTasks(tasks.filter((element)=>element!==e));
    window.localStorage.tasks=JSON.stringify(tasks.filter((element)=>element!==e));

  }
  if (window.localStorage.length===0){
    window.localStorage.index=0;
    window.localStorage.tasks=JSON.stringify([]);
    window.localStorage.completed=JSON.stringify([])
    


  }
  let [index,setIndex]=useState(window.localStorage.index);
  let [text,setText]=useState('')
  let [tasks,setTasks]=useState(JSON.parse(window.localStorage.tasks));
  let [completed,setCompleted]=useState(JSON.parse(window.localStorage.completed));

 return(
 <div className='bg-indigo-500 w-auto h-screen'>
    <h1 className='ml-[45vw] mb-40 mpt-3 text-lg font-mono font-bold text-gray-100'>
      Todo List
      </h1>
      <div>
        <div  className='ml-[35vw] '>
          <input onChange={(e)=>{
             setText(e.target.value) 
          }} value={text} className='h-11 w-[40vw] pr-15 pl-2 rounded-sm' type="text" />
          <button onClick={(e)=>{
            if (!tasks.includes(text)){
              setTasks([...tasks,text]);
              window.localStorage.tasks=JSON.stringify([...tasks,text]);
            }
          }} className='absolute  px-2 text-gray-100 bg-orange-500 rounded-md right-[25vw] mt-[2px] mr-1 font-bold text-4xl'>
                +
          </button>
          <select value={index} onChange={
            (e)=>{
              window.localStorage.index=e.target.value;
              setIndex(e.target.value)
            }
          } className='inline ml-3' >
            <option value="0">All</option>
            <option value="1">completed</option>
            <option value="2">uncompleted</option>
          </select>
        <div className='mt-5 w-[40vw] '>

        {(index==0?tasks:index==1?completed:tasks.filter((e)=>!completed.includes(e))).map((e)=>{
           return (
             <List isCompleted={completed.includes(e)} remove={remove} complete={complete} text={e} key={e}>

             </List>
           )
        })
      }
        </div>
        </div>
        </div>    
 </div>
 )
}

export default App;
