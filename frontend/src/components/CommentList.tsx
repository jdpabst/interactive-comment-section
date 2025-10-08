// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Comment from './Comment/Comment';

// export default function CommentsList() {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     axios.get('/api/posts')
//       .then(res => setComments(res.data))
//       .catch(err => console.error(err));
//   }, []);


//   return (
//     <div className='comments-list'>
//       {comments.map(comment => (
//         <Comment
//           key={comment.id}
//           // avatar={comment.avatarUrl || '/assets/avatars/default.png'}
//           username={comment.username}
//           createdAt={comment.createdAt}
//           content={comment.content}
//         />
//       ))}
//     </div>
//   );
// }
