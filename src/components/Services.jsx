import React from 'react';

function Services() {
  return (
    <section className="fourthsection" id="services">
      <h1>Services</h1>
      <div className="services-container">
        <div className="service-box">
          <h2>Web Development</h2>
          <p>I create responsive and dynamic websites using the latest technologies.</p>
        </div>
        <div className="service-box">
          <h2>Software Engineering</h2>
          <p>I develop robust and scalable software solutions.</p>
        </div>
        <div className="service-box">
          <h2>App Development</h2>
          <p>I build mobile applications for both Android and iOS platforms.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
