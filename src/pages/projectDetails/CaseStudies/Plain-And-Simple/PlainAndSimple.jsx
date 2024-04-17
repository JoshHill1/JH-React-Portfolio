// ...and then its own seperate styling page
import './PlainAndSimple.css'

// imported images
import PASThumbnail from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleFINAL.png'
import PASBeginning from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleBeginning1.png'
import PASOnPaper from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleOnPaper.png'
import PASCatchingErr from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleCatchingErr.png'
import PASBGPencilPattern from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleBGPencilPattern.png'
import PASBGVectorPattern from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleBGVectorPattern.png'
import PASEmblem from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleEmblem.png'
import PASEmblemSketches from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleEmblemSketches.png'
import PAS_FinalAsset from '../../../../assets/images/projImages/PlainAndSimple/PAS_FinalAssets1.png'

function PlainAndSimple() {

  return (
    <div className="PASPage">
      <div className="PAS-init-content">
        <h1>PLAIN AND SIMPLE</h1>
        <img src={PASThumbnail} />
        <p>This not so simple project, inspired from an Instagram post, showed their process of making sans serif text into a grindcore font. It was something that I always wanted to try but never knew the process of how to make it. I thought of it like a logo so made an emblem, and repeating background to go along with it.</p>
      </div>
      <div id="PAS-explanation">
        <h2>The process</h2>
        <p>The idea for making this grindcore, grotesque font was in the back of my mind for a while before I got around to making it. I caught interest in making something after seeing it be used in different music covers. I liked the look of how the text was barely readable if at all, and how it had some sort of symetryto it - the way it caves in. </p>
        <h3>Why PLAIN AND SIMPLE?</h3>
        <p>I didn't think about what words I would want to use when I got around to making this design, and so when I saw <a href='https://www.instagram.com/p/Cste8SxPY2v/' target='_blank'>this video</a>, showing someones process on how they did it, I thought of how ironic it would be to use the words "plain and simple".</p>
        <h2>Sketching</h2>
        <p>I like working hands on, with paper, pencil, and an eraser, so when it came to sketching, I was able to set up the design just the way I wanted it to come out, and then make more adjustments when actually building it in Illustrator.</p>
        <p>The best method I used was to sketch the lettering off of my computer screen, and then start adding the spikes in and making it look more jagged from there. I did the whole paper sketch in one sitting so that I could have a consistent flow of spikes. I didn't want to come back to it the next day and then have one half of the design be less jagged than the rest. When it came to writing out the "AND", I wanted it to look organic. What I imagined, was the two words, "PLAIN" and "SIMPLE" being pulled away from each other and having that space be used for the "AND"; and then I made holes or tears as negative space to make the letters readable.</p>
        <img src={PASBeginning} />
        <img src={PASOnPaper} />

        <h2>Not all that Simple</h2>
        <p>After dwelling on what I thought was the final design, I would look at it long and hard and notice small details I didn't like. So many in fact, that I circled what I didn't like, went back into the design, and changed stuff around. What you see below is the first final I did, but with the marks I made for correction to get the second and <b>final</b> design.</p>
        <img src={PASCatchingErr} />
        
        <h2>Repeating pattern</h2>
        <p>Around the same time of making this design, I came across another Instagram post that showed how to make repeating patterns. It looked interesting and easy enough to do, so I got my pencil and made a pattern, then designed it in Illustrator.</p>
        <img src={PASBGPencilPattern} />
        <img src={PASBGVectorPattern} />

        <h2>Emblem</h2>
        <p>After making the pattern, which was done just about the next day of making the design, I was still strengthening my CSS skills and tried making a whole clothing site with the brand being PLAIN AND SIMPLE. It was on my mind for a long time and during that time, I thought what the emblem of the brand should be. What should be displayed on something like the Instagram profile picture if this brand really were to exist. I already had an idea - it came naturally when I was tracing the lettering in Illustrator.</p>
        <p>At the bottom and in the middle of the design, between the M and the P, I thought that the spikes I made looked pretty cool, and almost like a face; so I copied the path, and went on from there.</p>
        <img src={PASEmblemSketches} />

        <p>I never really decided on a logo that I liked... Until I started making this case study. For the brand, I made a whole branding mission statement; and the message behind PLAIN AND SIMPLE, along with its jagged look, is that for everyone, it isn't always as simple as it may seem compared to someone else; There can always be some underlying meaning. After looking back at the two logos, I could instantly tell that I liked the one on the right more than the one on the left. What got me to this conclusion, was one: I liked the middle top piece more than the other one, and two: I wanted it to be symmetrical, but I guess what made the one on the right more symbolic and stand out to me was that I didn't want there to be some pattern or ladder with the spikes climbing up to the center.</p>
        <img src={PASEmblem} />

        <h2>Conclusion</h2>
        <p>This project was drawn out for longer than I thought it would. I enjoyed the whole process of sketching what I thought looked good for the text and the patterned background, and liked taking a part of the design and making it into something like the emblem. </p>
        <img src={PAS_FinalAsset} id='PAS_FinalAssets'/>
      </div>
    </div>
  )
}

export default PlainAndSimple;
