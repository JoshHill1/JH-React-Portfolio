// ...and then its own seperate styling page
import './FirstPortfolio.css'

// imported images
import FoodMakerThumbnail from '../../../../assets/images/projImages/HTMLPortfolio/HTMLPortfolio.png'

function FirstPortfolio() {

  return (
    <div className="init-proj-content">
      <h1>HTML Portfolio</h1>
      <img src={FoodMakerThumbnail}></img>
      <p>This is my first actual portfolio I make using vanilla HTML, CSS, and JavaScript. It helped me learn more about CSS and how to work around the framework that I was looking for, and was a great learning experience before starting this React Portfolio.</p>
    </div>
  )
}

export default FirstPortfolio;
