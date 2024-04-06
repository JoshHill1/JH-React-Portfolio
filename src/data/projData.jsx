import PlainAndSimpleFINAL from "../assets/images/projImages/PlainAndSimple/PlainAndSimpleFINAL.png"
import FoodMakerApp from "../assets/images/projImages/FoodMakerApp/FoodMakerApp.png"
import HTMLPortfolio from "../assets/images/projImages/HTMLPortfolio/HTMLPortfolio.png"

const projData = [
  { 
    id: 1, 
    category: "Digital Art", 
    imageSrc: PlainAndSimpleFINAL, 
    title: "PLAIN AND SIMPLE", 
    subtext: "This not so simple project, inspired from an Instagram post, showed their process of making sans serif text into a grindcore font. It was something that I always wanted to try but never knew the process of how to make it. I thought of it like a logo so made an emblem, and repeating background to go along with it.",
    featured: true
  },
  { 
    id: 2, 
    category: "Web Designs", 
    imageSrc: FoodMakerApp, 
    title: "Food Maker App", 
    subtext: "This group project was built using a public API to help users find a list of cooking recipes. The app provides filters on what meal you're looking for and is styled using Bulma.",
    featured: true
  },
  { 
    id: 3, 
    category: "Web Designs", 
    imageSrc: HTMLPortfolio, 
    title: "HTML Portfolio", 
    subtext: "This is my first actual portfolio I make using vanilla HTML, CSS, and JavaScript. It helped me learn more about CSS and how to work around the framework that I was looking for, and was a great learning experience before starting this React Portfolio.",
    featured: true
  },
  
];

export default projData;
