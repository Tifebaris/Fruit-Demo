import Image from 'next/image'
import {AiFillLike} from 'react-icons/ai'
import {FcViewDetails} from 'react-icons/fc'
import style from './fruit.module.css'

export default function Fruits({list}) {
    const fruitList = list.map(fruits =>(
        <section key={fruits.id} className= {`pt-4  ${style.section}`} >
            <Image src={fruits.image} alt={fruits.name} height={200} width={300} />
            <h2 className='text-[#fff] bg-[#1A5D1A] rounded-md w-[100px] mt-3 text-center'>{fruits.name}</h2>
            <h2>{fruits.botanicalName}</h2>
            <h2>{fruits.season}</h2>
           <div className='grid grid-cols-2 w-3/5'>
           <AiFillLike/>
           <FcViewDetails/>
           </div>
        </section>
    ))
  return (
    <div className="grid grid-cols-3 gap-2 bg-[#F7FFE5]">
        {fruitList}
    </div>
  )
}
