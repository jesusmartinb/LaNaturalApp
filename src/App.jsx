import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const openToast = () => {
    toast('Hello World')
  }

  return (
    <>
      <button onClick={openToast}>Click</button>
      <ToastContainer />
    </>
  )
}

export default App
