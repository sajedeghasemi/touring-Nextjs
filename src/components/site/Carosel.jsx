import React from 'react'
import Image from "next/image";
import product1 from '../../../public/image/06.jpg'
import product2 from '../../../public/image/13.jpg'
import product3 from '../../../public/image/11.jpg'
import product4 from '../../../public/image/08.jpg'
import product5 from '../../../public/image/09.jpg'
import product6 from '../../../public/image/10.jpg'
import product7 from '../../../public/image/17.jpg'

export const Carosel = () => {
  return (
    <div className="mt-5">
        <div className="carousel carousel-center rounded-box max-w-[30rem]">
            <div className="carousel-item px-5 pr-10">
                <Image src={product1} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5">
                <Image src={product2} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5">
                <Image src={product3} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5">
                <Image src={product4} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5">
                <Image src={product5} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5">
                <Image src={product6} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
            <div className="carousel-item px-5 pl-10">
                <Image src={product7} height={800} width={800} className='h-[500px] w-[400px] rounded-xl'/>
            </div>
        </div>
    </div>
  )
}
