import React from 'react';
import Typed from 'typed.js';

function ImAText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Cyclist', 'Gamer', 'Digital Artist'],
      typeSpeed: 100,
      backSpeed: 57,
      backDelay: 1000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default ImAText;
