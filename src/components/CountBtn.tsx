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
    <img src={imagePath} alt={text} className='w-20 lg:w-fit h-15 lg:h-fit cursor-pointer' onClick={() => setCount(count + 1)} />
    <div className='flex flex-col'>
    <p className='text-center text-1xl lg:text-4xl mb-4'>Rp. {numberWithCommas(count * Number(text))}</p>
    <div className="flex flex-row gap-3">

    {/* create button that takes up all available space */}
    <div className='flex-col w-10 lg:w-full rounded-lg'>
      <Button variant={'default'} onClick={() => {count !== 0 ? setCount(count - 1) : 0}} className={cn('bg-orange-400 text-white', className)} size={'icon'}>
      - 
      </Button>
    <p className='text-center text-1xl lg:text-4xl mb-4'>{count}x</p>
    </div>
    </div>
    </div>
    </div>
  );
}
