import React from "react"
import Heading from "../Reusable/Heading"

function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/rishabh2301jain@gmail.com" method="POST">
          <div class="form-group">
            <input
              className="form-control"
              type="name"
              id="name"
              placeholder="Your Name"
            ></input>
          </div>
          <div class="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Your Email"
            ></input>
          </div>
          <div class="form-group">
            <input
              className="form-control"
              type="mobile"
              id="mobile"
              placeholder="Mobile No."
            ></input>
          </div>
          <div class="form-group">
            <textarea
              className="form-control"
              type="text"
              id="message"
              placeholder="Your Messgae"
            ></textarea>
          </div>
          <div class="form-group">
            <button
              type="submit"
              className="btn btn-outline btn-info btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
