import Header from '@/components/header/header';
import Info from '@/components/service/info';
import Menu from '@/components/service/menu';
import Services from '@/components/service/services';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex w-full gap-10 flex-col">
      
        <Header />

        <Services />

        <Menu/>

        <Info/>


    </div>
  );
}
