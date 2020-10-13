import React from "react";
import "./Vision.css";

function Vision() {
  return <>
    <section id="vision-section">
      <h2>Our Vision</h2>
      <div className="vision">
        <div className='div-vision-img'>
          <img src='https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
        </div>
        <div className='vision-text'>
          <p>Our mission is to preserve flora and fauna.
          The preservation of flora and fauna is significant for people too. An even biological system filters the climate, giving us clean air to inhale, a solid water framework to help different marine life, and arable land for agricultural production.

          It likewise furnishes us with remarkable plants with medicinal properties, which fill in as the establishment of our medicines. At the point when environments fizzle, our own wellbeing is in danger.
            </p>
        </div>
      </div>
    </section>;
  </>
}

export default Vision;
