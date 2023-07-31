// CountBtn.js
import { cn, numberWithCommas } from '@/lib/utils';
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
    <div className='flex flex-col items-center border-white border-solid'>
    <img src={imagePath} alt={text} className='w-fit h-fit cursor-pointer' onClick={() => setCount(count + 1)} />
    <div className='flex flex-col'>
    <p className='text-center text-4xl mb-4'>{numberWithCommas(count * Number(text))}</p>
    <div className="flex flex-row gap-3">

    <p className='text-center text-4xl mb-4'>{count}x</p>
    {/* create button that takes up all available space */}
    <div className='flex flex-auto w-full rounded-lg'>
      <Button variant={'outline'} onClick={() => {count !== 0 ? setCount(count - 1) : 0}} className={cn('bg-orange-400 text-white', className)} size={'lg'}>
      - 
      </Button>
    </div>
    </div>
    </div>
    </div>
  );
}
