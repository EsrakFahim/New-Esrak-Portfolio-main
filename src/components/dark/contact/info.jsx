'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Info() {
  const [clientIP, setClientIP] = useState(null);
  const [messageLoading, setMessageLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  // Fetch client's IP address
  useEffect(() => {
    // Enhanced fetchIP error handling
    const fetchIP = async () => {
      try {
        const res = await axios.get("https://api.ipify.org?format=json");
        setClientIP(res.data.ip);
      } catch (error) {
        console.error("Error fetching client IP:", error);
        setClientIP("Unavailable"); // Fallback value
      }
    };


    fetchIP();
  }, []);


  const handleFormDetails = async (data) => {
    setMessageLoading(true);
    try {
      const res = await axios.post(
        "https://portfolio-backend-lime-seven.vercel.app/api/v1/client",
        {
          clientName: data.name,
          clientEmail: data.email,
          reqService: data.subject,
          clientMessage: data.message,
          clientIP: clientIP || "Unavailable", // Fallback for IP
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials
        }
      );

      if (res.status === 200) {
        alert("Form submitted successfully!");
        reset(); // Reset form after success
      } else {
        alert("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an issue submitting the form. Please try again.");
    } finally {
      setMessageLoading(false); // Stop loading regardless of outcome
    }
  };




  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let is make your brand brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href="tel:+18408412569" className="main-color">
                +880 17590-44987
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Facebook</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Twitter</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form onSubmit={handleSubmit(handleFormDetails)}>
              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && (
                      <small className="error-text">{errors.name.message}</small>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email address',
                        },
                      })}
                      placeholder="Email"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <small className="error-text">{errors.email.message}</small>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      type="text"
                      {...register('subject')}
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                      })}
                      placeholder="Message"
                      rows="4"
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && (
                      <small className="error-text">
                        {errors.message.message}
                      </small>
                    )}
                  </div>
                  <div className="mt-30">
                    <button
                      type="submit"
                      className="main-btn"
                      disabled={messageLoading} // Properly conditionally disable the button
                    >
                      <span className="text">
                        {messageLoading ? 'Loading...' : 'Send Message'}
                      </span>
                    </button>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
