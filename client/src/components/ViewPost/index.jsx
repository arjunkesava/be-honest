import React from 'react';
import shuffleArray from '../../helpers/shuffle';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ViewPost = (props) => {
  var borderColors = shuffleArray(['red', 'yellow', 'lime', 'green', 'aqua', 'blue', 'magenta', 'green', 'aqua', 'blue', 'magenta']);
  // We push the first color to last for uniformity of gradient
  borderColors.push(borderColors[0]);
  var name = (props.name && capitalizeFirstLetter(props.name)) || 'Anonymus';

  return (
    <>
    <div className="post-border" style={{ borderImage: `conic-gradient(${borderColors.join(',')}) 1` }}>
      <p>{props.post}</p>
    </div>
    <p className="text-right">By <strong>{name}</strong></p>
    </>
  );
}
 
export default ViewPost;