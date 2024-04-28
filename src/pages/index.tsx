//import Image from "next/image";
//import { Inter } from "next/font/google";

//  const inter = Inter({ subsets: ["latin"] });
import Topo from "@/components/Topo";
import Card from "@/components/Card";


export default function Home() {
  return (
    <main className="">
      <Topo/>
      <div className='imagem-rotate'></div>
      <Card produto={"mouse"} valor={'R$20,00'}/>
      <Card/>
      <div></div>
      <div></div>
    </main>
  );
}
