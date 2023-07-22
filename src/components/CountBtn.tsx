// CountBtn.js
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
  count: number;
  setCount: (count: number) => void;
  text: string;
  imagePath: string; 
}

export default function CountBtn({ className, count, setCount, text, imagePath }: Props) {
  return (
    <div className='flex flex-col items-center'>
    <img src={imagePath} alt={text} className='w-fit h-fit cursor-pointer' onClick={() => setCount(count + 1)} />
    <div className='flex flex-col'>
    <p className='text-center text-2xl'>{count}x</p>
    <Button variant={'outline'} onClick={() => {count !== 0 ? setCount(count - 1) : 0}} className={cn('bg-orange-400 text-white', className)}>
      - 
    </Button>
    </div>
    </div>
  );
}
