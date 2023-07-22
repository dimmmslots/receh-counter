import { useState } from 'react';
import CountBtn from '@/components/CountBtn';
import Image100 from './assets/100.png';
import Image200 from './assets/200.png';
import Image500 from './assets/500.png';
import Image1000 from './assets/1000.png';


function App() {
  const receh = [100, 200, 500, 1000];
  const [receh100, setReceh100] = useState(0);
  const [receh200, setReceh200] = useState(0);
  const [receh500, setReceh500] = useState(0);
  const [receh1000, setReceh1000] = useState(0);


  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
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
