// ...and then its own seperate styling page
import './MindOverload.css'

// imported images
import MindOverloadThumbnail from '../../../../assets/images/projImages/MindOverload/RefracturedFilter_MindOverloadFinal.png'

function MindOverload() {

  return (
      <div className="init-proj-content">
        <h1>Mind Overload</h1>
        <img src={MindOverloadThumbnail}></img>
        <p>After seeing a design that used the filter distortion in Adobe Photoshop, I had to give it a try because of how manipulative and easy it seemed to do. I chose to use my favorite movie as inspiration for this artwork; I think it's a good fit for the design too!</p>
      </div>
  )
}

export default MindOverload;
