import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <header className="flex justify-center items-center mb-2">
        <Image src="/something.png" alt="Logo" width={100} height={100} />
        <h1 className="ml-2 text-2xl font-bold">Something Coin</h1>
      </header>
      <h4 className="ml-4  font-semibold text-center">This is a Demo of TON mini app representing gaming on TON Blockchain <br></br> Click To Earn </h4>
      <div className="card relative">
      <Image 
          src="/something.png" 
          alt="Button" 
          width={200} 
          height={50} 
          onClick={() => setCount(count + 1)} 
          className="animate-bounce cursor-pointer" // Add this class to enable the animation
        />
        <p className="absolute bottom-0 left-0 right-0 text-center">{count}</p>
      </div>
    </main>
  );
}

