function Welcome(){
    return(
        <div>
        <div class="container-fluid padding text-center">
            <h1 class="display-3 text-center">Built with ease.</h1>
            <hr class="text-center line"/>
            <p class="lead taxt-center hello">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem est voluptas maxime! Minus obcaecati animi quia nostrum veritatis. Error!</p>
        </div>
        <span className="my-4"></span>
        <br />
        <br />
        
        <div className="container-fluid padding">
            <div className="row taxt-center padding">
                <div className="col-xs-12 col-sm-6 col-md-3 text-center padding">
                    <i class="fas fa-code" aria-hidden="true"></i>
                    <h3>HTML5</h3>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, id.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                    <i class="fas fa-bold" aria-hidden="true"></i>
                    <h3>BOOTSTRAP</h3>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, id.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                    <i class="fab fa-css3" aria-hidden="true"></i>
                    <h3>CSS</h3>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, id.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                    <i class="fab fa-react" aria-hidden="true"></i>
                    <h3>REACT</h3>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, id.</p>
                </div>
                 </div>
        </div>
        <hr className="my-4" />
        <br></br>
        <br></br>
        </div>
    )
}

export default Welcome