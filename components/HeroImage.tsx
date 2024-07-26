import Image from 'next/image';

const HeroImage = ({ HeroIMG }) => {
  return (
    <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden rounded-2xl">
      <Image
        src={HeroIMG}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  )
}

export default HeroImage;
