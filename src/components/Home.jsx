import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Software Engineer', 'App Developer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed.js instance on cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section className="firstsection" id="home">
      <div className="leftsection">
        Hi, My name is <span className="purple">Gaurav Raj</span>
        <div>and I am a Passionate</div>
        <span id="element" ref={el}></span>
      </div>
      <div className="rightsection">
        <img src="/myphoto.jpg" alt="Gaurav Raj" id="img1" />
      </div>
    </section>
  );
}

export default Home;
