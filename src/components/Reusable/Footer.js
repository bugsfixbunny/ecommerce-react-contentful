import React from "react"

function Footer({ superman }) {
  return (
    <footer>
      <div className="footer-block">
        <div>
          <div className="col-12 pt-2 pb-1 mx-auto text-center bg-dark text-light">
            <h6>Awsome copyright footer &copy; {superman} </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
