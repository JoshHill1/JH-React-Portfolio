import './WalkIn.css'

// imported images
import WalkInThumbnail from '../../../../assets/images/projImages/Walkin/WalkIn.png'
import WalkInInspo from '../../../../assets/images/projImages/Walkin/WalkIn-Inspo.mp4'
import WalkInSketch from '../../../../assets/images/projImages/Walkin/WalkIn-Sketch.jpg'

function WalkIn() {

  return (
    <div className="WalkInPage">
      <div className="WalkIn-init-content">
        <h1>WalkIn'</h1>
        <p>For some odd reason, this idea came to my head where I made a play on words. I thought of someone walking in, walkin'... cool, sexy, happy, etc. Whatever it is, one can say they're walking art for the way they dress. The idea stuck to me and the design came to life.</p>
        <img src={WalkInThumbnail} alt='Walkin project image' />
      </div>
      <div id="WalkIn-explanation">
        <h2>The process</h2>
        <p>I don't exactly know how this idea came to me. I believe it was inspired by something I saw during my family trip in Japan. While we were walking to get to Dotonbori, we came across this screen:</p>
        <video autoPlay controls muted >
          <source src={WalkInInspo} type='video/mp4' alt='A screen of a bunch of fictional people walking next to other people walking.' />
        </video>
        <p>It wasn't till after the trip, that I thought of the design. I wanted to have something to reference the walking figure off of, so I remembered the video I took and used that as my reference. Then, I sketched out the man, making it less thick and have more of a neck and chin, and then traced out the figure in Adobe Illustrator.</p>
        <img src={WalkInSketch} alt="A man in the middle of taking a walking step, sketched onto paper with a pencil" />
        <p>When it came to the text, I already had a font in mind for the Walkin' text. I left the "i" in lowercase because while I was making the project, I don't think the capitalized "I" looked good. I did however, slightly adjust the space between the k and the i to make it look a little more like "Walk" and "in'" are their own seperate words, but still close enough to make it look like it's all one word.</p>
        <p>For the rest of the words, I chose which ones I liked and set a color to them. It was a little challenging to get the right size and manage the color for the text. I didn't want to overload one area and leave another area blank.</p>
        <p>You might notice how behind the figure, there is one more word than there is in the front, or that it might seem more filled there, but then I added some assets behind the words to make the area more populated</p>
      </div>
    </div>
  )
}

export default WalkIn;
