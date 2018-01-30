import React from 'react';
import {Link} from 'react-router-dom';

export default function ({currentUserId}) {

  let footerClass;

  if (currentUserId) {
    footerClass = 'footer-logged-in';
  } else {
    footerClass = 'footer-homepage';
  }

  return (
    <main className={footerClass}>
      <span className="credits">
        <p className="logo-credit">Logo designed by Flora Hollifield</p>
        <div>Icons made by <a href="https://www.flaticon.com/authors/egor-rumyantsev" title="Egor Rumyantsev">Egor Rumyantsev</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> are licensed by <a href="https://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </span>
      <span className="personal-links">
        <a href="http://will-watkins.com/">Profile</a>
        <a href="https://github.com/wwatkins09">Github</a>
        <a href="https://www.linkedin.com/in/will-watkins/">LinkedIn</a>
      </span>
    </main>
  );
}
