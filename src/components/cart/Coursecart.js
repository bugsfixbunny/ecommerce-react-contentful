import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

class Coursecart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: props.cour.edges,
    }
  }

  render() {
    console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            {this.state.courses.map(({ node }) => {
              return (
                <div key={node.id} className="card-deck mx-auto">
                  <div className="card" style={{ width: 200 }}>
                    <Img
                      className="card-img-top"
                      fixed={node.image.fixed}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="text-center ">{node.titile}</h5>
                      <small className="card-text ">
                        {node.description.description}
                      </small>
                      <br></br>
                      <div className="column">
                        <button
                          data-item-id={node.id}
                          data-item-price={node.price}
                          data-item-url="http://www.sae-akgec.in"
                          data-item-image={node.image.fixed}
                          data-item-name={node.titile}
                          className="btn btn-info text-center snipcart-add-item "
                        >
                          Buy Course
                        </button>
                        <p className="text-center">Price : ${node.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Coursecart
