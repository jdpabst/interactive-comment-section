import Upvote from '../Upvote/Upvote';
import './comment.scss';

export default function Comment({ posts }) {
 // console.log(posts[0].id)

 return (
  // change the mentions in the comments to a different color and style even though they are hardcoded in the db
  // const contentWithMentions = comment.content.replace(
  // /@(\w+)/g,
  // '<span class="text-blue-500 font-medium">@$1</span>'
  // );
  <>
   {posts.map((post) => (

    <div className='main-comment-container'>
     <div className='upvote-desktop'>
      <Upvote />
     </div>

     <div className='comment-contents-container'>
      <div className='comment-header display-flex-row'>
       <div className='user-and-comment-info display-flex-row'>
        <img src='/assets/avatars/image-amyrobson.png' />
        <p className='user-name'>{post.firstName} {post.lastName}</p>
        <p className='date-posted'>{post.createdAt}</p>
       </div>
       <button className='reply-bttn display-flex-row'>
        <img src='/assets/icons/icon-reply.svg' />
        <p>Reply</p>
       </button>
      </div>
      <div className='comment'>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
      </div>

      <div className="comment-actions">
       <Upvote />
       <button className="reply-bttn display-flex-row">
        <img src="/assets/icons/icon-reply.svg" />
        <p>Reply</p>
       </button>
      </div>
     </div>
    </div>
   ))
   }
  </>
 )
}