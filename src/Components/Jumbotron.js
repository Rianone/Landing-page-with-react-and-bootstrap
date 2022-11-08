function Jumbotron() {
    return(
        <div class="jumbotron">
            <h1>React JS</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a consequuntur quo eos. Sit officiis, consequatur animi doloremque eaque esse.</p>
            <hr class="my-2"/>
           
           <div class="row">
               <div className="col-sm-5 col-md-10">
                        <span class="lead"> For more info click here: <a class="btn btn-link text-secondary">https:/Some Link.com</a></span>
                </div>

               <div className="col-sm-7 col-md-2">
                    <a class="btn btn-lg btn-primary" href="#" role="button">Join Community</a>
               </div>
           </div>
           <br />
        </div>
    )
}

export default Jumbotron