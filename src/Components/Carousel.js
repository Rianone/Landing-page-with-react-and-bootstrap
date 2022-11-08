function Carousel(){
    return(
        <a id="home">

        <div id="carouselId" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="./background.png" alt="First slide"/>
                    <div class="carousel-caption text-center">
                         <h1 class="display-2">Bootstrap and React Website</h1>
                         <h3>Bootstrap and react complete website</h3>
                         <button class="btn btn-outline-light btn-lg mr-2 c-btn">VIEW DEMO</button>
                         <button type="button" class="btn btn-lg btn-primary c-btn">Get Started</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./background2.png" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img src="./background3.png" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </a>
    )
}

export default Carousel;