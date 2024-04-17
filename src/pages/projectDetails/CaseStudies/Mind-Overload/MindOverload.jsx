import './MindOverload.css'

// imported images
import MindOverloadThumbnail from '../../../../assets/images/projImages/MindOverload/RefracturedFilter_MindOverloadFinal.png'
import MindORef1 from '../../../../assets/images/projImages/MindOverload/EEAAO-SS.png'
import MindORef2 from '../../../../assets/images/projImages/MindOverload/EEAAO-SS1.png'
import ColorMap from '../../../../assets/images/projImages/MindOverload/ColorMap.png'

function MindOverload() {

  return (
    <div className='MindOPage'>
      <div className="MindO-init-content">
        <h1>Mind Overload</h1>
        <p>After seeing a design that used the filter distortion in Adobe Photoshop, I had to give it a try because of how manipulative and easy it seemed to do. I chose to use my favorite movie as inspiration for this artwork; I think it's a good fit for the design too!</p>
        <img src={MindOverloadThumbnail} alt='Mind Overload project image' />
      </div>
      <div id="MindO-explanation">
        <h2>The process.</h2>
        <p>For this art project, I got inspired from <a href='https://www.instagram.com/p/CxiZP0zNY1L/' target='_blank'>this Instagram post</a> that shows you how to make that effect I have over the text. It was fun to figre out what worked and didn't work when it came to how wide should the pattern of gradients be, and how high of the glass filter should I make it. It did take a bit longer than I expected to get the result I liked but it was interesting to learn what impacted what. An important piece of information that I wish was in the tutorial, was to mention how your text does get converted into a smart object, so it's best to know where you want everything to be placed beforehand; or you can edit your objects individually and then drag them into the actual design.</p>
        <h2>Thought process behind the design.</h2>
        <p>When thinking about what I wanted to use the filter on, I wanted the filter to fit with the words I show. I really wanted to watch the movie Everything Everywhere All At Once &#40;for the sixth time&#41; so it gave me a reason to watch it and get the images I wanted for this. After getting two frames from the film, I started my project file.</p>
        <h3>Why not just one frame from the film?</h3>
        <p>Well, I tried to find one good frame to use but basically, to get the best quality and the look I was going for, I had to get multiple frames. Below are the frames I used and edited in the project:</p>
        <img src={MindORef1} alt='A frame from the movie I reference' />
        <img src={MindORef2} alt='A frame from the movie I reference' />
        <h2>Color Scheme:</h2>
        <p>At the beginning of the design and even after trial and error of starting the design, I didn't land on the color choice untill I look up some images for inspiration. It wasn't long till I came across this photo and knew that it would work well with the project.</p>
        <img src={ColorMap} alt='A part of an image of the cover of the movie I reference, with a primary light red color, and secondary tan beige color.' />
        <p>It wasn't long after I saw that the colors and the image&#40;s&#41; I imported didn't go well together. The contrast of the dark image against the bright and vibrant colors got me to go to YouTube and use <a href='https://www.youtube.com/watch?v=U8wcTRyCXAc&list=LL&index=37&t=23s&ab_channel=DoronStudio' target='_blank'>this tutorial</a> I saw not too long ago.</p>
      </div>
    </div>
  )
}

export default MindOverload;
