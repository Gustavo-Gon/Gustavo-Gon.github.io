import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faCode, faFileCode, faReact, faSwift } from '@fortawesome/free-solid-svg-icons';

function IconList() {
  return (
    <div className="icon-list">
      <FontAwesomeIcon icon={faHtml5} title="HTML" />
      <FontAwesomeIcon icon={faCss3} title="CSS" />
      <FontAwesomeIcon icon={faJs} title="JavaScript" />
      <FontAwesomeIcon icon={faNode} title="Node.js" />
      <FontAwesomeIcon icon={faCode} title="C++" />
      <FontAwesomeIcon icon={faFileCode} title="VScode" />
      <FontAwesomeIcon icon={faReact} title="React" />
      <FontAwesomeIcon icon={faSwift} title="Swift" />
    </div>
  );
}

export default IconList;
