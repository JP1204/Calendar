import React from "react"
import "./css/Homepage.css"
import defaultBackground from "../images/dark-blue-background.png"

/* get all images from image folder */
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


function Home(props) {
    console.log(images)
    return (
        <div className="homepage" style={{backgroundImage: `url(${defaultBackground})`}}>
            <h1 className="welcome-msg">Welcome {props.username}</h1>

            <div className="think-box">
                <div className="lorem-ipsum">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem illo non quam
                    repudiandae rerum. Adipisci, atque deleniti eum expedita facilis labore nisi odio odit, possimus
                    quod, unde voluptas voluptatem.
                </div>
                <div className="lorem-ipsum">Commodi eaque error fuga hic laudantium quae quaerat sit voluptate, voluptatem. Consequuntur in
                    maiores perspiciatis quo sit veniam. Aspernatur corporis deserunt doloremque earum eligendi illum
                    ipsam maxime optio provident veniam?
                </div>
                <div className="lorem-ipsum">Cumque ea eius eos fuga, itaque iusto libero minima minus nemo nisi non perferendis quam quia quis
                    similique sint tempora! Aliquam earum eos, error est et laudantium pariatur quae rem?
                </div>
            </div>
        </div>
    )
}

export default Home