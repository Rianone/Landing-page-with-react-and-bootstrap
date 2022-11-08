import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email:"",
            message:"",
            bool:null
         }
         
    }

     handleChange = event => {
        const {name, value} = event.target 
        this.setState({
            [name]:value
        })
    }

    verif = (event)=>{
        let regEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        let regText = /^[a-zA-Z0-9,?. 'éèàç]{5,}$/;
        let regName = /^[a-zA-Z0-9,?. 'éèàç]{3,25}$/;

        if(regName.test(this.state.name)){
            this.setState({
                bool:true
            })
            if(regEmail.test(this.state.email)){
            this.setState({
                bool:true
            })

            if(regText.test(this.state.message)){
            this.setState({
                bool:true
            })
             }
             else{
            this.setState({
                bool:false
            })
             }
            }
             else{
            this.setState({
                bool:false
            })
            }
        }

        else{
            this.setState({
                bool:false
            })
        }
    }

    render() { 
        let text=""
        if(this.state.bool == null){}
        else if (this.state.bool == true)
            text=<div><div><img src="chicken.gif" class="chicken img-responsive"/></div><p class="text-center bg-success">Thanks for your subscribtion !!!</p></div>
        else
            text=<p class="text-center text-danger">The form is wrongly filled !!!</p>

        return (
            <a id="contact">

            <div class="container-fluid padding text-center bg">
                
            <h1 class="text-center display-4 white">Feel Free to Contact Us.</h1>
            <hr class="line1"/>
            <div className="row padding">
                <div className="col-xs-11 col-md-8  contact">
                    {text}
                    <form action="form.php" method="POST" role="form" class="">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Enter your name" id="name" class="form-control" onChange={this.handleChange} required/>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Enter your email" id="em" class="form-control" onChange={this.handleChange} required/>
                </div>
                <div class="form-group">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" class="form-control" onChange={this.handleChange} required></textarea>
                </div>
                <button type="reset" class="btn btn-primary btn-lg btn-reset" onClick={this.verif}>Submit</button>
                 </form>
                </div>

                
            </div>
            <hr class="my-4"></hr>
            <div className="container-fluid padding text-center mt-4">
                    <h2 class="display-5 white">Connect here</h2>
                    <div className="social-btns padding col-12">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-google-plus"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
            </div>
            </div>
            </a>
        )
    }
}
 
export default Contact;