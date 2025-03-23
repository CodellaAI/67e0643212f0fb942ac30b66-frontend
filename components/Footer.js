
import { Globe, Mail, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-retro-navy border-t-4 border-neon-blue py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-retro text-neon-green mb-4">RETRO<span className="text-neon-pink">WAVE</span></h3>
            <p className="font-pixel text-retro-gray max-w-md">
              This site is best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0 at 800x600 resolution.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="retro-button p-2">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="retro-button p-2">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="retro-button p-2">
                <Star className="w-5 h-5" />
              </a>
            </div>
            <p className="font-pixel text-sm text-retro-gray">
              © 1999 RETROWAVE - ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-retro-darkgray">
          <p className="font-comic text-xs text-retro-gray">
            Made with <span className="text-neon-pink">♥</span> on Windows 98
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <img 
              src="https://web.archive.org/web/20091020152706/http://www.geocities.com/hk/img/ns_logo.gif" 
              alt="Netscape Now!" 
              width={88} 
              height={31}
              className="inline-block"
            />
            <img 
              src="https://web.archive.org/web/20091026152401/http://www.geocities.com/hk/img/ie_logo.gif" 
              alt="Internet Explorer" 
              width={88} 
              height={31}
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
