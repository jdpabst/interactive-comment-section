import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Upvote from '../Upvote/Upvote';
import './comment.scss';

dayjs.extend(relativeTime);

export default function Comment({ comments }) {

 // Recursive function to render a comment + its replies
 const renderComment = (comment, indent = 0) => {
  return (
   <div
    key={comment.id}
    className='main-comment-container'
    style={{ marginLeft: indent }} // indent replies
   >
    <div className='upvote-desktop'>
     <Upvote upvote={comment.upvotes} />
    </div>

    <div className='comment-contents-container'>
     <div className='comment-header display-flex-row'>
      <div className='user-and-comment-info display-flex-row'>
       <img src='/assets/avatars/image-amyrobson.png' />
       <p className='user-name'>{(comment.author.firstname + "" + comment.author.lastname).toLowerCase()}</p>
       <p className='date-posted'>{dayjs(comment.createdAt).fromNow()}</p>
      </div>
      <button className='reply-bttn display-flex-row'>
       <img src='/assets/icons/icon-reply.svg' />
       <p>Reply</p>
      </button>
     </div>

     <div className='comment'>
      <p>{comment.content}</p>
     </div>

     <div className="comment-actions">
      <Upvote upvote={comment.upvotes} />
      <button className="reply-bttn display-flex-row">
       <img src="/assets/icons/icon-reply.svg" />
       <p>Reply</p>
      </button>
     </div>

     {/* Render replies recursively */}
     {comment.replies && comment.replies.length > 0 && (
      <div className="replies-container">
       {comment.replies.map(reply => renderComment(reply, indent + 20))}
      </div>
     )}
    </div>
   </div>
  );
 };

 return <>{comments.map(comment => renderComment(comment))}</>;
}
