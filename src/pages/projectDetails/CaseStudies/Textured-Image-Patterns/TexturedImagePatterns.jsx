// ...and then its own seperate styling page
import './TexturedImagePatterns.css'

// imported images
import PatternsThumbnail from '../../../../assets/images/projImages/TexturedImages/AAPatternsFinalCollage.png'

function TexturedImagePatterns() {

  return (
    <div className='init-proj-content'>
        <h1>Textured Image Patterns</h1>
        <img src={PatternsThumbnail}></img>
        <p>This was a fun and interesting project I did after discovering how to make patterns in Photoshop and changing the way images look with the texture. Some have a more grunge look to them while some look more pixelated. Either way, it was still fun to experiment what other patterns to come up with.</p>
      </div>
  )
}

export default TexturedImagePatterns;
