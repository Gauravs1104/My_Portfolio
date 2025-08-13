import React from 'react';

function Contact() {
  return (
    <section className="sixthsection" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <p><strong>Phone:</strong> +91 9102773449</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/__gaurav___11_04/profilecard/?igsh=MTRza2w2dWJ2aTZvbA==" target="_blank">MY INSTAGRAM</a></p>
        <p><strong>Facebook:</strong> <a href="https://www.facebook.com/share/15qBJg85YC/" target="_blank">MY FACEBOOK</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Gauravs1104" target="_blank">MY GITHUB</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gaurav-raj-750278213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">MY LINKEDIN</a></p>
      </div>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d460.92653663643904!2d85.60692679322504!3d25.982985109558133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755093191744!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

export default Contact;
