import React ,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {

    const [input,setInput] = useState (props.edit ? props.edit.value :  "" );

    const inputRef =useRef(null)

    useEffect(() => {
    inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        
        setInput("");

    props.onSubmit({
    id: Math.floor(Math.random()* 10000),
    text: input
    });

    

};

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? ( 
        <>
        <input 
        type="text"
        placeholder='Görevi Güncelle'
        value={input}
        name="text" 
        className='todo-input edit'
        onChange={handleChange}
        ref ={inputRef}
        />
        <button className='todo-button edit'>Güncelle </button> 
        
        </> ) : (
            <>
            <input 
            type="text"
            placeholder='Görev Ekle'
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleChange}
            ref ={inputRef}
            />
            <button className='todo-button'>Görev Ekle</button>
            </>
            ) }
        
    </form>
  );
}

export default TodoForm;