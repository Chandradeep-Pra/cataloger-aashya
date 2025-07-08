'use client';

import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const router = useRouter();
  const { categorySlug } = params;

  const handleClick = () => {
    router.push(`/category/${categorySlug}/1`);
  };

  return (
    <div className="p-6 space-y-4">
      <div className='flex items-center gap-2'>
        <HomeIcon size={36} className='border border-apricot p-2 rounded-full cursor-pointer hover:scale-110' fill='#F99471' stroke='#F99471' onClick={() => router.push('/explore')} />
        <h1 className="text-2xl font-bold capitalize">
        {categorySlug}
      </h1>
      </div>
      

      <Button onClick={handleClick}>
        Item - {categorySlug}
      </Button>
    </div>
  );
}
