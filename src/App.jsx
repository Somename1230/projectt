import {useState, useRef} from 'react';

import Croc from './images/Bombardiro_crocodilo_.webp';
import Shark from './images/tralalero.jpeg';
import Elephant from './images/lirrlili larilia.jpg'
import Cat from './images/trippi troppi.jpg'



function App() {
  const [currentImage,setCurrentImage]=useState(0);
  const imageRef = useRef(0);


  const images = {
      0: {src:Elephant,
        caption:'Lirilli Larillia',
        text:"The cactus elephant, known as Lirrili Larillia, is a rare and whimsical creature that roams the arid deserts, blending seamlessly with its spiny environment. Its body is a fascinating hybrid of an elephant’s sturdy frame and the textured surface of a cactus, covered in small, thorny protrusions. With a vibrant green hue that shifts to brown in the harsh sunlight, Lirrili Larillia thrives in the dry heat, using its trunk to gather moisture from the few plants that survive in its environment. Despite its unusual appearance, it moves gracefully, its large ears flapping like the leaves of a desert plant. Its name, Lirrili Larillia, comes from the ancient desert dialect, meaning the one who protects the oasis, as it is believed to guide other creatures to hidden water sources."},
      1: {src:Shark,
        caption:'Tralalero Tralala',
        text:"Tralalero Tralala is no ordinary shark; he's a stylish and trendsetting predator who cruises the deep sea in a pair of ultra-cool sneakers. With vibrant colors and sleek designs, his kicks are the envy of every sea creature, from the smallest fish to the most majestic whales. Tralalero Tralala's sneakers aren't just for show—they give him unmatched speed and agility, allowing him to glide through the water with the precision of a professional athlete. His reputation as the most fashionable shark in the ocean has earned him the title of The King of Cool, and his signature move, a swift spin in the current, always leaves a trail of awe-inspired sea creatures behind him."},
      2: {src:Croc,
        caption:'Bombardino Crocadilo',
        text:"Bombardino Crocadilo is a fearsome and majestic bomber plane with a one-of-a-kind design: its nose is shaped like the fierce head of a crocodile, complete with sharp, gleaming teeth and intimidating eyes. This flying powerhouse soars through the skies with unparalleled speed and precision, its powerful engines roaring like a predator in pursuit. The plane's crocodile-inspired features aren't just for show—they symbolize resilience and dominance, built to endure the toughest conditions. Pilots aboard Bombardino Crocadilo are known for their unwavering confidence, knowing that this extraordinary aircraft can handle any mission, whether it's a strategic airstrike or a high-speed chase through storm clouds. With its sleek, reptilian design and unmatched firepower, Bombardino Crocadilo is a true symbol of aerial strength and ingenuity."},
      3: {src:Cat,
        caption:'Trippi Troppi',
      text:'Trippi Troppi is a quirky and playful shrimp-cat hybrid with a bubbly personality and an unmistakable appearance. With the tiny, segmented body of a shrimp and the fluffy, curious face of a cat, Trippi Troppi is the ultimate combination of aquatic agility and feline mischief. Its vibrant, translucent exoskeleton shimmers in the light as it scuttles around, leaping gracefully from place to place with the smoothness of a sea creature and the cat-like precision of a prowling feline. Known for its boundless energy and love of adventure, Trippi Troppi is always on the move, making new friends and exploring every nook and cranny it can find. Whether it’s swimming through a tidepool or lounging on a warm sunlit windowsill, Trippi Troppi captures hearts with its charming mix of charm, playfulness, and an unmistakable, irresistible cuteness.'},
  };
  
  
  const previous = () => {
    if (imageRef.current>0) {
      imageRef.current-=1
    } else 
    imageRef.current=3;
    
    setCurrentImage(imageRef.current)
  }

  const forward = () => {
    if (imageRef.current<3) {
      imageRef.current+=1
    } else 
      imageRef.current=0;
    
    setCurrentImage(imageRef.current);
  }




  return  (
    <>
    <div className=" min-h-screen bg-green-950">
      <div className="flex items-center justify-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center h-40">Brainrot Image Slider</div>
      <div className="flex items-center justify-center">
      
      <div className="relative">

        <img src={images[currentImage].src} className= "w-96 h-96 object-cover" />
        <p className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center">
          {images[currentImage].caption}
          </p>

        <button className="absolute right-full bottom-0 bg-gray-700 text-white py-40 px-8 mb-10 rounded-lg hover:bg-gray-600"
        onClick={previous}>
          -
        </button>

        <button className="absolute left-full bottom-0 bg-gray-700 text-white py-40 px-8 mb-10 rounded-lg hover:bg-gray-600"
        onClick={forward}>
          +
        </button>

        

      </div>
      
    </div>


    <div class="flex justify-center items-center">
    <p className=" bg-emerald-800 p-5 m-20 rounded-lg shadow-md flex justify-center items-center text-lg">{images[currentImage].text}</p>
    </div>
    </div>
    </>
  )
}

export default App;
