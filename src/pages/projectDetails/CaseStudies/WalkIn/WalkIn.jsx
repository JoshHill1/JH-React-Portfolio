// ...and then its own seperate styling page
import './WalkIn.css'

// imported images
import WalkInThumbnail from '../../../../assets/images/projImages/Walkin/WalkIn.png'

function WalkIn() {

  return (
      <div className="init-proj-content">
        <h1>WalkIn'</h1>
        <img src={WalkInThumbnail}></img>
        <p>For some odd reason, this idea came to my head where I made a play on words. I thought of someone walking in, walkin'... cool, sexy, happy, etc. Whatever it is, one can say they're walking art for the way they dress. The idea stuck to me and the design came to life.</p>
      </div>
  )
}

export default WalkIn;
