import HeroContent from "./HeroContent";
import NavBar from "./NavBar";

function Head() {
    return (
        <div 
        className="bg-black w-full h-full bg-contain bg-no-repeat" 
        style={{backgroundImage:'url(./headcover.svg'}}>
            <div style={{backgroundImage:'url(./retangle.svg'}} class="bg-no-repeat bg-left-bottom">
                <NavBar />
                <HeroContent />
            </div>
        </div>
    );
}

    export default Head;