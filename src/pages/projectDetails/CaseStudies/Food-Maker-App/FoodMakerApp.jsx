// ...and then its own seperate styling page
import './FoodMakerApp.css'

// imported images
import FoodMakerThumbnail from '../../../../assets/images/projImages/FoodMakerApp/FoodMakerApp.png'

function FoodMakerApp() {

  return (
      <div className="init-proj-content">
        <h1>Food Maker App</h1>
        <img src={FoodMakerThumbnail}></img>
        <p>This group project was built using a public API to help users find a list of cooking recipes. The app provides filters on what meal you're looking for and is styled using Bulma.</p>
      </div>
  )
}

export default FoodMakerApp;
