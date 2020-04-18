import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function DualInfoBlock({ heading, source }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading className="container" title={heading} />
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <p className="lead text-white mb-5">
              Eiusmod et irure aute in ipsum Lorem cillum. Officia amet aliqua
              ullamco nostrud adipisicing fugiat eu ullamco occaecat ullamco
              Lorem. Ullamco do ullamco deserunt ipsum excepteur consectetur.
              Sint reprehenderit id ex velit. Excepteur id officia eu proident
              amet mollit eiusmod ad sint esse. Aliquip eu pariatur aute
              excepteur.Exercitation cillum id sint aliquip culpa mollit
              consectetur magna ex consequat. Incididunt non culpa sunt pariatur
              qui voluptate ullamco. Et nulla magna voluptate et nulla. Non sunt
              reprehenderit laboris et commodo fugiat Lorem esse sint labore ut
              aute.Id mollit duis enim commodo ea exercitation qui aliquip magna
              aliqua. Incididunt nostrud nulla labore consectetur duis ullamco
              qui voluptate aliquip minim esse. Anim velit in aliquip culpa
              cupidatat est esse incididunt anim reprehenderit ipsum aliquip.
              Adipisicing non consectetur in qui velit aute nostrud do fugiat
              irure. Irure qui ullamco excepteur tempor officia cupidatat
              consectetur eu.Duis cupidatat in veniam adipisicing irure eu
              exercitation. Qui aute aliquip minim consectetur consectetur ad
              exercitation. Ea aliquip aliqua laborum ex amet occaecat non
              excepteur sit.
            </p>
          </div>
          <div className="col-12 col-md-4 mx-auto">
            <div className="card">
              <img
                src={source}
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">Just Click Photos</h5>
                <p className="card-text text-white">
                  Eiusmod et irure aute in ipsum Lorem cillum. Officia amet
                  aliqua ullamco nostrud adipisicing fugiat eu ullamco occaecat
                  ullamco Lorem. Ullamco do ullamco deserunt ipsum excepteur
                  consectetur.
                </p>
                <Link to="/">
                  <button className="btn btn-warning btn-block">{heading}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
