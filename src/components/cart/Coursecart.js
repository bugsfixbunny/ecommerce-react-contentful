import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"


const getCaty = items => {
  let holditems =items.map(items=> {
    return items.node.category
  })
  let holdCategories = new Set(holditems)
  let categories = Array.from(holdCategories)
  categories = ["all",...categories]
  return categories
}

class Coursecart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: props.cour.edges,
      mycourses: props.cour.edges,
      mycategories:getCaty(props.cour.edges)
    }
  }
  catyClick = category => {
    let keep = [...this.state.mycourses]
    if(category === 'all'){
      this.setState(() => {
        return {courses:keep}
      })
    }else{
      let holdme = keep.filter(({node}) => node.category === category )
      this.setState(() =>{
        return {courses:holdme}
      })
    }
  }
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {
                this.state.mycategories.map((category,index) =>{
                  return(
                    <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => this.catyClick(category)}>
                      {category}
                    </button>
                  )
                })
              }
            </div>
          </div>
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
