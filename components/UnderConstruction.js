
import { Construction } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="py-8 px-4 md:px-8 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-3">
          <Construction className="w-8 h-8 text-neon-yellow mr-2" />
          <h3 className="text-2xl font-retro text-neon-yellow">UNDER CONSTRUCTION</h3>
          <Construction className="w-8 h-8 text-neon-yellow ml-2" />
        </div>
        <div className="flex justify-center mb-3">
          <img 
            src="https://web.archive.org/web/20091020152706/http://www.geocities.com/hk/img/construction.gif" 
            alt="Under Construction" 
            className="h-16"
          />
        </div>
        <p className="font-comic text-white">
          Some parts of this website are still under construction. Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
