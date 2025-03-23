
const MarqueeText = ({ text }) => {
  return (
    <div className="bg-retro-navy border-y-2 border-neon-yellow py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content font-pixel text-neon-yellow text-xl">
          {text}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
