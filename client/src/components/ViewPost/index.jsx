import React from 'react';
import shuffleArray from '../../helpers/shuffle';

const ViewPost = (props) => {
  const borderColors = shuffleArray(['red', 'yellow', 'lime', 'green', 'aqua', 'blue', 'magenta', 'green', 'aqua', 'blue', 'magenta']);
  // We push the first color to last for uniformity of gradient
  borderColors.push(borderColors[0]);

  return (
    <div className="post-border" style={{ borderImage: `conic-gradient(${borderColors.join(',')}) 1` }}>
      <p>{props.post}</p>
    </div>
  );
}
 
export default ViewPost;