function TwoComponent(props){
    return(
      <a id={props.id}>
           <div class="row padding">
            <div className="container-fluid col-xs-12 col-md-5 ml-2">
            <h1 className="mb-4">{props.title}</h1>
            <p className="lead">{props.text1}</p>
            <p className="lead">{props.text2}</p>
            <p className="lead">{props.text3}</p>
            <button className="btn btn-primary">{props.btnText}</button>
           </div>

           <div className="container-fluid col-xs-12 col-md-6">
                <img src={props.img} alt={props.key} class="img-fluid"/>
           </div>

       </div>
       
      </a>
    )
}

export default TwoComponent