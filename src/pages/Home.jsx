import  {useState} from 'react'
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTextBox} from '../features/textadd/textaddSlice';
import { updateTextBox } from '../features/textadd/textaddSlice';
import { deleteTextBox } from '../features/textadd/textaddSlice';
console.log("hiii");
function Home() {
    const textBoxes = useSelector(state => state.todos);
    const [fontSize, setFontSize] = useState(16);
    const [color, setColor]= useState( '#ffffff');
    const [selectedBox, setSelectedBox] =useState('');
    const dispatch = useDispatch();
    
    const handleAddText =() =>{
        const newBox ={
            id:nanoid(),
            text: selectedBox,
            top: Math.random() * 300,
            left: Math.random() *500,
            fontSize: fontSize,
            color:color,
        };
        dispatch(addTextBox(newBox));
        setSelectedBox('')
    };
    const [editTodotext, seteditTodotext] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const  handleUpdate = (taskobj) =>{
        seteditTodotext(taskobj);
        setSelectedBox(taskobj.text);
        setIsEdit(true);
    }

    const saveBtnHandler =() =>{
      dispatch(updateTextBox({id:editTodotext.id, text:selectedBox}));
      setSelectedBox('');
      setIsEdit(false);
    }

  return (
    <div className="container">
      <div className="left-panel">
      <div className="video-wrapper">
        <video  controls>
          <source src="https://www.youtube.com/watch?v=1i04-A7kfFI&t=2634s" type="video/mp4" />
          <source src="https://www.youtube.com/watch?v=1i04-A7kfFI&t=2634s" type="video/ogg" />
          your  browser dose not support the video tag
        </video>
        
       {
        textBoxes.map((todo) =>(
          <Draggable key={todo.id} bounds="parent">
          <div  className="text-box"
          style={{
            top: `${todo.top}px`,
            left:`${todo.left}px`,
            color:todo.color,
            fontSize:`${todo.fontSize}px`,
            transform:'translate(-50%, -50%)',
            zIndex:1
          }}
          >
            
              
                <p>{todo.text}</p>
                <Button
	                  className='delete-icon'
	                  onClick={()=>dispatch(deleteTextBox(todo.id))}
	                >Del
	                </Button>
                  <Button
	                  className=""
	                  onClick={()=>handleUpdate(todo)}
	                >Edit
	                </Button>
             
                  
            <div>
            
                  
            </div>
          </div>
          </Draggable>
        ))
       }
      </div>
      </div>
      <div className="right-panel">
        
        
            <Input
              type="text"
              value={selectedBox}
              onChange={(e) => setSelectedBox(e.target.value )}
              placeholder="Enter text"
            />
            { isEdit ? <Button onClick={() => saveBtnHandler()} className="add-text-btn">Save</Button> : <Button onClick={handleAddText} className="add-text-btn">Add Text</Button> }

            <h3>Font Size :</h3>
            <Input type="number" value={fontSize} onChange={(e)=> setFontSize(e.target.value)} />
            <h3>Text Color</h3>
            <Input type="color" value={color} onChange={(e)=> setColor(e.target.value)} />     
        
      </div>
      
    </div>
  )
}

export default Home
