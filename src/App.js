
import { useState } from 'react';
import './App.css';
import './components/header.css'

import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Buttons';

import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// toast.configure();


function App() {

  

  const function_run0 =() => {

    setd(text.toUpperCase())
    if (text.split(/\s+/).filter((element)=> { return element.length!==0; }).length!==0)
       { toast.success(' Converted to upper case ' , {autoClose:4000}) }
    else
    toast.error(' Text is empty ' , {autoClose:4000})
        
  }

  const function_run1 = () => {
    setd(text.toLowerCase())
    if (text.split(/\s+/).filter((element)=> { return element.length!==0; }).length!==0)
       { toast.success(' Converted to lower case ' , {autoClose:4000}) }
    else
    toast.error(' Text is empty ' , {autoClose:4000})
  }

  const function_run2 = () => {
    setd('')
    toast.success(' Text clear ',{autoClose:4000})
    setc(0)
    setc2(0)
  }

  const function_run3 = () => {
    navigator.clipboard.writeText(text);
    if (text.split(/\s+/).filter((element)=> { return element.length!==0; }).length!==0)
       { toast.success(' Text copied ' , {autoClose:4000}) }
    else
    toast.error(' Text is empty ' , {autoClose:4000})
  }
  const [count, setc] = useState(0)
  const function_run4 = () => {
    setc(text.split(/\s+/).filter((element)=> { return element.length!==0; }).length);
  }

  const [count2, setc2] = useState(0)
  const function_run5 = () => {
    setc2(text.length);
  }

  const function_run6 = () => {
    setd(text.split(/[ ]+/).join(" "));
    if (text.split(/\s+/).filter((element)=> { return element.length!==0; }).length!==0)
       { toast.success(' extra spaces removed ' , {autoClose:4000}) }
    else
    toast.error(' Text is empty ' , {autoClose:4000})
    
  }

  const setvalue = (event) => {

    setd(event.target.value);

  }
  const [text, setd] = useState('');

  return (

    <>
      <Header title=' Text Utils' />
      <div className='text'>  Enter text below</div>
      <Input value={text} update={setvalue} className='textarea'/>
      <div className='count'>
        <span> Total words : {count}</span>
        <span> Total Characters : {count2}</span>
      </div>
      <div className='buttons'>

        <Button name='Clear' run={function_run2} />
        <Button name='Copy' run={function_run3} />
        <Button name='Words' run={function_run4} />
        <Button name='Upper-Case' run={function_run0} />
        <Button name='remove-spaces' run={function_run6} />
        <Button name='Lower-Case' run={function_run1} />
        <Button name='Characters' run={function_run5} />    
          <ToastContainer />
          </div>




    </>

  );
}

export default App;
