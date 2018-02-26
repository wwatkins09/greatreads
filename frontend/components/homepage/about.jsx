import React from 'react';

const About = (props) => {
  return (
    <div className="about">
      <content className="about-content">
        <h2>About Greatreads</h2>
        <p>Greatreads is a web-app inspired by Goodreads that allows users to discover, organize, and review various books. It operates with Ruby on Rails and a Postgresql database on the backend, as well as with React and Redux architecture on the frontend.</p>
        <p>The code for this site can be found <a href="https://github.com/wwatkins09/greatreads">here</a>.</p>
        <p>To see more of my work, visit my profile site <a href="http://will-watkins.com">here</a>.</p>
      </content>
    </div>
  );
};

export default About;
