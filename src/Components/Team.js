import Card from "./Card"
function Team() {
    return(
        <a id="team">
            <div class="container-fluid padding pl-2">
            <br />
            <h1 class="text-center display-3">Meet the Team.</h1>    
            <hr class="text-center line"/>
            
            <div class="row welcome padding">
                <Card key="1" img="team1.png" name="John Doe"/>
                <Card key="2" img="team2.png" name="Rianone Smis"/>
                <Card key="3" img="team3.png" name="Phil Ho"/>
            </div>
            
        </div>
        </a>
        
    )   
}

export default Team