import PlainAndSimpleFINAL from "../assets/images/projImages/PlainAndSimple/PlainAndSimpleFINAL.png"
import FoodMakerApp from "../assets/images/projImages/FoodMakerApp/FoodMakerApp.png"
import HTMLPortfolio from "../assets/images/projImages/HTMLPortfolio/HTMLPortfolio.png"
import Walkin from  "../assets/images/projImages/Walkin/WalkIn.png"
import TexturedImages from "../assets/images/projImages/TexturedImages/AAPatternsFinalCollage.png"
import UniverseSecrets from "../assets/images/projImages/AIll-WrinkleTool/WrinkleToolFinal.png"
import MindOverload from "../assets/images/projImages/MindOverload/RefracturedFilter_MindOverloadFinal.png"


const projData = [
  {
    id: 'WalkIn',
    category: "Digital Art",
    imageSrc: Walkin,
    title: "WalkIn'",
    subtext: "For some odd reason, this idea came to my head where I made a play on words. I thought of someone walking in, walkin'... cool, sexy, happy, etc. Whatever it is, one can say they're walking art for the way they dress. The idea stuck to me and the design came to life.",
    featured: false
  },
  {
    id: 'Mind-Overload',
    category: "Digital Art",
    imageSrc: MindOverload,
    title: "Mind Overload",
    subtext: "After seeing a design that used the filter distortion in Adobe Photoshop, I had to give it a try because of how manipulative and easy it seemed to do. I chose to use my favorite movie as inspiration for this artwork; I think it's a good fit for the design too!",
    featured: true
  },
  {
    id: 'Secrets-of-the-Universe',
    category: "Digital Art",
    imageSrc: UniverseSecrets,
    title: "Secrets of the Universe",
    subtext: "I found an interesting tutorial on Instagram showing off the warping tool in Adobe Illustrator so I had to give it a try. I didn't really know what look I was going for, but then after adding texture in the backround - almost making it look like stars, the text came after and the design all fell into place.",
    featured: false
  },
  {
    id: 'Textured-Image-Patterns',
    category: "Digital Art",
    imageSrc: TexturedImages,
    title: "Textured Image Patterns",
    subtext: "This was a fun and interesting project I did after discovering how to make patterns in Photoshop and changing the way images look with the texture. Some have a more grunge look to them while some look more pixelated. Either way, it was still fun to experiment what other patterns to come up with.",
    featured: false
  },
  { 
    id: 'Plain-And-Simple', 
    category: "Digital Art", 
    imageSrc: PlainAndSimpleFINAL, 
    title: "PLAIN AND SIMPLE", 
    subtext: "This not so simple project, inspired from an Instagram post, showed their process of making sans serif text into a grindcore font. It was something that I always wanted to try but never knew the process of how to make it. I thought of it like a logo so made an emblem, and repeating background to go along with it.",
    featured: true
  },
  { 
    id: 'Food-Maker-App', 
    category: "Web Designs", 
    imageSrc: FoodMakerApp, 
    title: "Food Maker App", 
    subtext: "This group project was built using a public API to help users find a list of cooking recipes. The app provides filters on what meal you're looking for and is styled using Bulma.",
    featured: false
  },
  { 
    id: 'First-Portfolio', 
    category: "Web Designs", 
    imageSrc: HTMLPortfolio, 
    title: "HTML Portfolio", 
    subtext: "This is my first actual portfolio I made using vanilla HTML, CSS, and JavaScript. It helped me learn more about CSS and how to work around the framework that I was looking for, and was a great learning experience before starting this React Portfolio.",
    featured: true
  },
  
];

export default projData;
