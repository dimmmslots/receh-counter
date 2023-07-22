import { useState } from 'react';
import CountBtn from '@/components/CountBtn';
import Image100 from './assets/100.png';
import Image200 from './assets/200.png';
import Image500 from './assets/500.png';
import Image1000 from './assets/1000.png';
import { Button } from './components/ui/button';


function App() {
  const receh = [100, 200, 500, 1000];
  const [receh100, setReceh100] = useState(0);
  const [receh200, setReceh200] = useState(0);
  const [receh500, setReceh500] = useState(0);
  const [receh1000, setReceh1000] = useState(0);

  function storeToLocalStorage() {
    localStorage.setItem('receh100', receh100.toString());
    localStorage.setItem('receh200', receh200.toString());
    localStorage.setItem('receh500', receh500.toString());
    localStorage.setItem('receh1000', receh1000.toString());
  }

  function loadFromLocalStorage() {
    setReceh100(parseInt(localStorage.getItem('receh100') || '0'));
    setReceh200(parseInt(localStorage.getItem('receh200') || '0'));
    setReceh500(parseInt(localStorage.getItem('receh500') || '0'));
    setReceh1000(parseInt(localStorage.getItem('receh1000') || '0'));
  }


  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className='flex flex-row'>
        <Button onClick={storeToLocalStorage} className='bg-green-500 text-white px-4 py-2 rounded-md mx-4 w-28'>Save</Button>
        <Button onClick={loadFromLocalStorage} className='bg-blue-500 text-white px-4 py-2 rounded-md mx-4 w-28'>Load</Button>
        </div>
        <h1 className='text-6xl mb-8'>Rp. {(receh100 * 100)
         + (receh200 * 200) + (receh500 * 500) + (receh1000 * 1000)
         }
         </h1>
        <div className="flex flex-row">
          <CountBtn count={receh100} setCount={setReceh100} text='100' className='mx-1 w-24' imagePath={Image100}/>
          <CountBtn count={receh200} setCount={setReceh200} text='100' className='mx-1 w-24' imagePath={Image200}/>
          <CountBtn count={receh500} setCount={setReceh500} text='100' className='mx-1 w-24' imagePath={Image500}/>
          <CountBtn count={receh1000} setCount={setReceh1000} text='100' className='mx-4 w-24' imagePath={Image1000}/>
        </div>
      </div>
    </main>
  );
}

export default App;
