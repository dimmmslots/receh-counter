import { useEffect, useState } from 'react';
import CountBtn from '@/components/CountBtn';
import Image100 from './assets/100.png';
import Image200 from './assets/200.png';
import Image500 from './assets/500.png';
import Image1000 from './assets/1000.png';
import { Button } from './components/ui/button';
import AchievementPage from './components/AchievementPage';
import { CreateShorcut } from './lib/shortcut';
import { numberWithCommas } from './lib/utils';
import { Guide } from './components/Guide';
import {achievementLists, checkAchievement} from './lib/achievement';
import { AchievementList } from './components/AchievementsList';


function App() {

  const [receh100, setReceh100] = useState(0);
  const [receh200, setReceh200] = useState(0);
  const [receh500, setReceh500] = useState(0);
  const [receh1000, setReceh1000] = useState(0);
  const [achievementTitle, setAchievementTitle] = useState('');
  const [achievementDesc, setAchievementDesc] = useState('');
  const [achievements, setAchievements] = useState(achievementLists);
  useEffect(() => {
    console.log(achievements);
    console.log([receh100, receh200, receh500, receh1000]);
    // create object with keys of the achievement name and value of the achievement isAchieved status
    const achievements_status = Object.keys(achievements).reduce((acc, achievement) => {
      acc[achievement] = achievements[achievement as keyof typeof achievements].isAchieved;
      return acc;
    }, {} as {[key: string]: boolean});
    console.log(checkAchievement(receh100, receh200, receh500, receh1000, achievements_status));
    if(checkAchievement(receh100, receh200, receh500, receh1000, achievements_status)){
      const achievement_name = checkAchievement(receh100, receh200, receh500, receh1000, achievements_status) as string;
      setAchievementTitle(
        // fetch object value from achievements object using achievement_name
        achievementLists[achievement_name as keyof typeof achievementLists].title
      );
      setAchievementDesc(
        // fetch object value from achievements object using achievement_name
        achievementLists[achievement_name as keyof typeof achievementLists].description
      );
      // get isAchieved value from achievements object using achievement_name
      const isAchieved = achievements[achievement_name as keyof typeof achievements].isAchieved;
      if(!isAchieved){
        setAchievements(prevAchievements => ({
          ...prevAchievements,
          [achievement_name]: {
            ...prevAchievements[achievement_name as keyof typeof prevAchievements],
            isAchieved: true,
          }
        }))        
        setTajir(true);
        setTimeout(() => {
        setTajir(false);
        setAchievementTitle('');
        setAchievementDesc('');
      }, 5000);
      }
    }
  });
  const [tajir, setTajir] = useState(false);

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

  CreateShorcut(["Shift", "Z"], () => {
    if(achievementTitle === '') setReceh100(receh100 + 1);
  })

  CreateShorcut(["Control","Z"], () => {
    if(receh100 && achievementTitle === '') setReceh100(receh100 - 1);
  })

  CreateShorcut(["Shift", "X"], () => {
    if(achievementTitle === '') setReceh200(receh200 + 1);
  })
  
  CreateShorcut(["Control", "X"], () => {
    if(receh200 && achievementTitle === '') setReceh200(receh200 - 1);
  })

  CreateShorcut(["Shift", "C"], () => {
    if(achievementTitle === '') setReceh500(receh500 + 1);
  })

  CreateShorcut(["Control", "C"], () => {
    if(receh500 && achievementTitle === '') setReceh500(receh500 - 1);
  })

  CreateShorcut(["Shift", "V"], () => {
    if(achievementTitle === '') setReceh1000(receh1000 + 1);
  })

  CreateShorcut(["Control", "V"], () => {
    if(receh1000 && achievementTitle === '') setReceh1000(receh1000 - 1);
  })


  return (
    <main className="flex flex-col items-center justify-center h-screen RobotoMono">
      <div className="flex flex-col items-center gap-y-4">
        <div className='flex flex-row'>
        <Button onClick={storeToLocalStorage} className='bg-blue-500 text-white px-4 py-2 rounded-md mx-4 w-28'>Save</Button>
        <Button onClick={loadFromLocalStorage} className='bg-orange-500 text-white px-4 py-2 rounded-md mx-4 w-28'>Load</Button>
        </div>
        <h1 className='text-4xl lg:text-7xl mb-8'>Rp. {numberWithCommas((receh100 * 100)
         + (receh200 * 200) + (receh500 * 500) + (receh1000 * 1000))
         }
         </h1>
        <div className="flex flex-row gap-2">
          <CountBtn count={receh100} setCount={setReceh100} text='100' className='mx-1 w-12 lg:w-48' imagePath={Image100}/>
          <CountBtn count={receh200} setCount={setReceh200} text='200' className='mx-1 w-12 lg:w-48' imagePath={Image200}/>
          <CountBtn count={receh500} setCount={setReceh500} text='500' className='mx-1 w-12 lg:w-48' imagePath={Image500}/>
          <CountBtn count={receh1000} setCount={setReceh1000} text='1000' className='mx-1 w-12 lg:w-48' imagePath={Image1000}/>
        </div>
      </div>
      <div className='hidden'>
      <AchievementPage
      openState={tajir}
      onOpenChange={(newOpen) => {
        setTajir(newOpen)
      }
    }
      title={achievementTitle}
      desc={achievementDesc}
    />
      </div>
    <Guide/>
    <AchievementList achievements_status={
      // iterate through achievements object and return object with key of achievement name and value of isAchieved
      Object.fromEntries(Object.entries(achievements).map(([key, value]) => [key, value.isAchieved]))
    }/>
    <p className='my-6'>Check me out on <a href="https://github.com/dimmmslots" className='hover:text-blue-600 hover:underline text-yellow-600' target='_blank'>Github</a></p>
    </main>
  );
}

export default App;
