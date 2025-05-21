import Upvote from '../Upvote/Upvote';
import './comment.scss';

export default function Comment() {
 return (
  <div className='main-comment-container'>
   <Upvote />
   <div className='comment-contents-container'>
    <div className='comment-header display-flex-row'>
     <div className='user-and-comment-info display-flex-row'>
      <img src='/assets/avatars/image-amyrobson.png' />
      <p className='user-name'>amyrobson</p>
      <p className='date-posted'>1 month ago</p>
     </div>
     <button className='reply-bttn display-flex-row'>
      <img src='/assets/icons/icon-reply.svg' />
      <p>Reply</p>
     </button>
    </div>
    <div className='comment'>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
    </div>
   </div>
  </div>
 )
}