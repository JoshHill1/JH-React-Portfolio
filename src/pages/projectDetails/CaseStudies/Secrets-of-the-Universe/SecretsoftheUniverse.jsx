// ...and then its own seperate styling page
import './SecretsoftheUniverse.css'

// imported images
import UniSecretsThumbnail from '../../../../assets/images/projImages/AIll-WrinkleTool/WrinkleToolFinal.png'

function SecretsoftheUniverse() {

  return (
      <div className="init-proj-content">
        <h1>Secrets of the Universe</h1>
        <img src={UniSecretsThumbnail}></img>
        <p>I found an interesting tutorial on Instagram showing off the warping tool in Adobe Illustrator so I had to give it a try. I didn't really know what look I was going for, but then after adding texture in the backround - almost making it look like stars, the text came after and the design all fell into place.</p>
      </div>
  )
}

export default SecretsoftheUniverse;
