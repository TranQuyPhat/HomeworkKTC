import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';

function LikeButton() {
  const [like, setLike] = React.useState(false);

  return (
    <div>
      <FontAwesomeIcon size='2x'
        icon={like ? faThumbsUpSolid : faThumbsUpRegular}
        onClick={() => setLike(!like)}
        style={{ cursor: 'pointer', marginRight: '8px' }}
      />
      {like ? 'Thank you!' : 'Click like if this post is useful to you!'}
    </div>
  );
}

export default LikeButton;
