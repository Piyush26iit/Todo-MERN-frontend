import axios from 'axios' 


const baseURL ="https://piyush26iit-todo-mern-backend.onrender.com";

const getALLToDo = (setToDo) => {
    axios
    .get(baseURL)
     .then(({data})=> {console.log(`data-->`,data);
     setToDo(data)
    
    });
     
}


const addToDo =(text ,setText ,setToDo)=>{

      axios
      .post(`${baseURL}/save`,{text})
      .then((data)=>
      {
         console.log(data);
         setText("")
         getALLToDo(setToDo)
      })
      .catch((err) => console.log(err))

}

const updateToDo =(toDoID , text , setText , setToDo , setIsUpdating)=>{

    axios
    .post(`${baseURL}/update`,{_id:toDoID ,text})
    .then((data)=>
    {
      
       setText("")
       setIsUpdating(false)
       getALLToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseURL}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getALLToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export {getALLToDo , addToDo , updateToDo , deleteToDo}