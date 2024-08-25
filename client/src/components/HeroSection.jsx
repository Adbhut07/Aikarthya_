const HeroSection = () => {
  return (
    <div className="relative w-[46.125rem] h-[35.863rem]">
      <img
        className="w-full h-full object-contain"
        alt="Hero"
        src="/heroipadpng@2x.png"
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="bg-royalblue-100 text-white rounded-lg px-6 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;