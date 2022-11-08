function Card(props) {
    return(
        <div className="col-md-4">
            <div class="card">
            <img class="card-img-top" src={props.img} alt="Team member image"/>
            <div class="card-body">
                <h4 class="card-title">{props.name}</h4>
                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit magnam quos delectus laboriosam quo aspernatur!</p>
                <div class="text-center logos">
                <a href="#"><img src="images\fb-icon.png" alt="facebook icon" class="logo"/></a>
                <a href="#"><img src="images\twitter-icon.png" alt="twitter icon"class="logo"/></a>
                <a href="#"><img src="images\in-icon.png" alt="linked in icon"class="logo"/></a>
                <a href="#"><img src="images\instagram-icon.png" alt="instagram icon"class="logo"/></a>
                </div>
                <button type="button" class="btn btn-primary">See profile</button>
            </div>
            </div>
        </div>
    )
}

export default Card