import Image from 'next/image'


export default function Topo() {
    return (
        <header className="flex justify-around items-center h-16">
            
                <Image src="/logo.png" alt="Logo" width={120} height={120} objectFit='contain'/>         
            <nav className=" items-center">
                
                <div className="flex gap-4 text-xl font-500">
                    <a>Como fazer</a>
                    <p>/</p>
                    <a>Ofertas</a>
                    <p>/</p>
                    <a>Depoimentos</a>
                    <p>/</p>
                    <a>Vídeos</a>
                    <p>/</p>
                    <a>Meu carrinho</a>
                </div>
            </nav>
        </header>
    )
}