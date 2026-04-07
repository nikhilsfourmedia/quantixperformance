"use client";

export default function Contact() {
  return (
    <div className="contact-area-1 about-contact-section space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.453589681829!2d73.90680909999999!3d18.4631022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb2863e9b691%3A0x1f0361f174500178!2sZudio%20-%20Golden%20Court%2C%20Pune!5e0!3m2!1sen!2sin!4v1775592360336!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap about-contact-card">
              <div className="title-area mb-30">
                <span className="about-contact-eyebrow">Lets connect</span>
                <h2 className="sec-title">Tell us what you are trying to grow</h2>
                <p>
                  Share your goals, timeline, and target market. We will reply
                  with practical next steps.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border about-contact-input"
                        name="name"
                        id="name"
                        placeholder="Full name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border about-contact-input"
                        name="email"
                        id="email"
                        placeholder="Work email*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border about-contact-input"
                        name="website"
                        id="website"
                        placeholder="Company or website"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="What do you want to improve in pipeline or lead quality?*"
                        id="contactForm"
                        className="form-control style-border about-contact-input"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20 about-contact-btn">
                    <span className="link-effect">
                      <span className="effect-1">SEND MESSAGE</span>
                      <span className="effect-1">SEND MESSAGE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
