import {motion,useMotionValue,useTransform} from 'framer-motion'
import React, { useState } from 'react'

const SwipeCards = () => {
    const [cardData,setCardData] = useState(cards);
  return (

    <div className='min-h-screen bg-neutral-900 grid place-items-center'>
        {cardData.map((card) => {return(<Card cardData={cardData} setCardData={setCardData} key={card.id} {...card}/>)})};

    </div>
  )
}

const Card = ({url,id,cardData,setCardData})=>{
   
    const x = useMotionValue(0);
    const opacity = useTransform(x,[-150,0,150],[0,1,0]);
    const rotateRaw = useTransform(x,[-150,150],[-18,18]);
    const isFront = (id === cards[cards.length - 1].id);

    const rotate = useTransform(()=>{
        const offset = isFront ? 0 : ((id%2 == 0)?6:-6);
        return rotateRaw.get() + offset;
    })

    const handleDrag = ()=> {
        if(Math.abs(x.get()) > 50){
            setCardData((pv) => pv.filter((v)=> v.id !== id));
        }
    }
    return(<motion.img drag="x" dragConstraints={{left:0,right:0}} className='w-72 h-96 object-cover rounded-lg origin-bottom hover:cursor-grab active:cursor-grabbing' src={url} alt='placeholder'
    style={{
        gridRow:1,
        gridColumn:1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform"
    }}
    onDragEnd={handleDrag}></motion.img>)
}




const cards = [{id:1,url:"https://images.unsplash.com/photo-1511553677255-ba939e5537e0?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:2,url: "https://images.unsplash.com/photo-1694977149698-4b2123300e0b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:3,url:"https://images.unsplash.com/photo-1707190280858-92e6b4cf4a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:4,url:"https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:5,url:"https://images.unsplash.com/photo-1616331027398-43237406dcb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

export default SwipeCards