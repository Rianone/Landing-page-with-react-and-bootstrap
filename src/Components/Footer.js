function Footer() { 
    return(
        <footer>
            <div class="container-fluid padding">
                <div class="row text-center">
                    <div className="col-md-4">
                        <img src="w3newbie.png" alt="logo" />
                        <hr className="line" />
                        <p>345-673-333</p>
                        <p>Janedoe@gmail.com</p>
                        <p>200 SomeStreet 1234</p>
                        <p>City, State 1234</p>
                    </div>
                    <div className="col-md-4">
                            <h3 class="title" >Our hours</h3>
                        <p>Monday-Wednesday, 9am-5pm</p>
                        <p>Wednesday-Saturday, 10am-7pm</p>
                        <p>Closed</p>
                    </div>
                    <div className="col-md-4">
                            <h3 class="title">Service area</h3>
                        <p>SomeCity, SomeState, 1234</p>
                        <p>SomeCity, SomeState, 1234</p>
                        <p>SomeCity, SomeState, 1234</p>
                        <p>SomeCity, SomeState, 1234</p>
                    </div>
                    <div className="col-12">
                        <hr  class="line1"/>
                        <h3 class="text-center">&copy; SomeSite.com</h3>
                    </div>
                </div>
                
            </div>
        </footer>
    )
 }

 export default Footer