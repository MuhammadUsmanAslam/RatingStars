import React, {useState} from 'react'
import './RatingStar.css'
import { ReactComponent as Star } from './star.svg';

function RatingStar() {
    // Manipulate rating hook or you can just pass is as /n
    // props and also modify css file to get it work as you want
    const [rating, setRating] = useState(null);

    // you can also comment onClick, onMouseEnter, onMouseLeave &
    // hover hook to work it as static
    const [hover, setHover] = useState(null);

    return (
        <div className='ratingstar'>
            <h1>RatingStar</h1>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <Star
                        onClick={()=>setRating(ratingValue)}
                        onMouseEnter={()=>setHover(ratingValue)}
                        onMouseLeave={()=>setHover(null)}
                        className={(ratingValue <= (hover || rating) ? "ratingstar__star ratingstar__starchecked" : "ratingstar__star" )}/>
                )
            })}
        </div>
    )
}

export default RatingStar
