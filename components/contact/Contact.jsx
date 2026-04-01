"use client";

export default function Contact() {
  return (
    <div className="premium-contact-area overflow-hidden">
      <style>{`
        .premium-contact-area {
          background: #000000;
          position: relative;
          padding: 120px 0;
          color: #fff;
        }
        .premium-contact-map {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
          z-index: 1;
        }
        .premium-contact-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%) invert(92%) contrast(83%);
        }
        @media (max-width: 991px) {
          .premium-contact-map {
            position: relative;
            width: 100%;
            height: 400px;
            margin-bottom: 50px;
          }
        }
        .premium-contact-form-wrap {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 24px;
          padding: 50px;
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }
        .premium-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(to right, #ffffff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .premium-desc {
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 40px;
        }
        .premium-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 12px;
          padding: 16px 24px;
          width: 100%;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        .premium-input::placeholder {
          color: #6b7280;
        }
        .premium-input:focus {
          outline: none;
          border-color: #fb923c;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.15);
        }
        textarea.premium-input {
          min-height: 150px;
          resize: vertical;
        }
        .premium-btn {
          display: inline-block;
          background: linear-gradient(135deg, #fb923c 0%, #ea580c 100%);
          color: #ffffff !important;
          padding: 18px 48px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(234, 88, 12, 0.35);
          width: 100%;
          cursor: pointer;
        }
        .premium-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(234, 88, 12, 0.5);
        }
      `}</style>
      
      <div className="premium-contact-map wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
        <iframe
          title="Map of Quantix Performance office in Undri, Pune"
          src="https://maps.google.com/maps?q=Golden+Court+Undri+Pune+Hills+and+Dales&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="premium-contact-form-wrap">
              <h2 className="premium-title">Tell us what you are trying to grow</h2>
              <p className="premium-desc">
                Share a short brief and the best way to reach you. We will
                respond with thoughtful next steps.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="name">
                      Full name
                    </label>
                    <input
                      required
                      type="text"
                      className="premium-input"
                      name="name"
                      id="name"
                      placeholder="Full name*"
                      autoComplete="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="email">
                      Work email
                    </label>
                    <input
                      required
                      type="email"
                      className="premium-input"
                      name="email"
                      id="email"
                      placeholder="Work email*"
                      autoComplete="email"
                    />
                  </div>
                  <div className="col-12">
                    <label className="visually-hidden" htmlFor="website">
                      Company or website
                    </label>
                    <input
                      type="text"
                      className="premium-input"
                      name="website"
                      id="website"
                      placeholder="Company or website (optional)"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="col-12">
                    <label className="visually-hidden" htmlFor="contactForm">
                      How we can help
                    </label>
                    <textarea
                      required
                      name="message"
                      placeholder="What are your goals, timeline, and target customers?*"
                      id="contactForm"
                      className="premium-input"
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="premium-btn">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
