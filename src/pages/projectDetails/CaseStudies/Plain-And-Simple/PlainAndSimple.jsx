// ...and then its own seperate styling page
import './PlainAndSimple.css'

// imported images
import PASThumbnail from '../../../../assets/images/projImages/PlainAndSimple/PlainAndSimpleFINAL.png'

function PlainAndSimple() {

  return (
      <div className="init-proj-content">
        <h1>PLAIN AND SIMPLE</h1>
        <img src={PASThumbnail}></img>
        <p>This not so simple project, inspired from an Instagram post, showed their process of making sans serif text into a grindcore font. It was something that I always wanted to try but never knew the process of how to make it. I thought of it like a logo so made an emblem, and repeating background to go along with it.</p>
      </div>
  )
}

export default PlainAndSimple;
