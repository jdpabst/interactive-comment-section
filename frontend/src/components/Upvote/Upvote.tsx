import './upvote.scss';

export default function Upvote({ upvote }) {
 console.log(upvote)
 return (
  <div className='upvote-container'>
   <img className='plus-icon' src='/assets/icons/icon-plus.svg' />
   <p>{upvote}</p>
   <img className='minus-icon' src='/assets/icons/icon-minus.svg' />
  </div>
 )
}