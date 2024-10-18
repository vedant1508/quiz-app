import Image from "next/image";
import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";

const Score_indicator = () => {
  return (
<div className="relative">
  <div className="relative mt-[59px]">
    {/* Image 2 in the background */}
    <Image  
      src={image2}
      alt="Description of the image"
    />
  </div>
  {/* Image 1 on top of Image 2 */}
  <div className="absolute inset-1  flex items-center justify-center">
    <Image 
      src={image1}
      alt="Circle"
    />
  </div>
  <div className="w-[60px] h-[60px] absolute z-20 bg-white rounded-full">

  </div>
</div>


  );
};

export default Score_indicator;
