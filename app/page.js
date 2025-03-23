
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Cpu, Globe, Zap, Music, PenTool, Construction, Star, Mail, ArrowDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarqueeText from '@/components/MarqueeText';
import RetroCounter from '@/components/RetroCounter';
import UnderConstruction from '@/components/UnderConstruction';

export default function Home() {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Generate stars for the background
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 3 + 1
      });
    }
    setStars(newStars);
  }, []);

  return (
    <main className="min-h-screen grid-bg">
      {/* Star field background */}
      <div className="star-field">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star blink"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`
            }}
          />
        ))}
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="retro-box mb-8">
            <h1 className="text-4xl md:text-6xl font-retro text-center mb-6 text-neon-pink animate-rainbow">
              WELCOME TO THE 90s WEB
            </h1>
            <p className="text-xl md:text-2xl font-pixel text-center mb-8 text-neon-blue">
              Experience the golden age of the internet!
            </p>
            <div className="flex justify-center">
              <button className="retro-button font-pixel text-xl">
                ENTER SITE
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <ArrowDown className="animate-bounce text-neon-green w-10 h-10" />
          </div>
        </div>
      </section>

      <MarqueeText text="✧･ﾟ: *✧･ﾟ:* WELCOME TO MY AWESOME 90s WEBSITE *:･ﾟ✧*:･ﾟ✧ BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 OR INTERNET EXPLORER 5.0 ✧･ﾟ: *✧･ﾟ:*" />

      {/* Features Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-retro text-center mb-12 text-neon-yellow">
            AWESOME FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu className="w-12 h-12 text-neon-pink" />}
              title="BLAZING FAST"
              description="Our site loads in under 30 seconds on a 56k modem!"
            />
            <FeatureCard 
              icon={<Globe className="w-12 h-12 text-neon-blue" />}
              title="WORLD WIDE WEB"
              description="We're on the Information Superhighway!"
            />
            <FeatureCard 
              icon={<Zap className="w-12 h-12 text-neon-yellow" />}
              title="ANIMATED GIFs"
              description="Tons of cool animated graphics and effects!"
            />
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <section className="py-8 px-4 md:px-8 text-center">
        <div className="max-w-md mx-auto retro-box">
          <h3 className="text-xl font-comic mb-4 text-neon-green">YOU ARE VISITOR #</h3>
          <RetroCounter />
        </div>
      </section>

      {/* Cool Tech Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-retro text-center mb-12 text-neon-green">
            RAD TECHNOLOGY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="retro-box">
              <h3 className="text-2xl font-pixel mb-4 text-neon-pink">CUTTING EDGE DESIGN</h3>
              <div className="flex items-start">
                <PenTool className="w-8 h-8 text-neon-yellow mr-4 flex-shrink-0" />
                <p className="font-comic">
                  Our site uses the latest HTML tables and frames technology for pixel-perfect layouts. 
                  Compatible with 800x600 resolution screens!
                </p>
              </div>
            </div>
            
            <div className="retro-box">
              <h3 className="text-2xl font-pixel mb-4 text-neon-blue">MIDI BACKGROUND MUSIC</h3>
              <div className="flex items-start">
                <Music className="w-8 h-8 text-neon-green mr-4 flex-shrink-0" />
                <p className="font-comic">
                  Enjoy our autoplay background music that starts immediately when you visit! 
                  No volume controls needed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UnderConstruction />

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pixel-border">
            <div className="retro-box p-8">
              <h2 className="text-3xl font-retro mb-6 text-neon-yellow">JOIN OUR WEBRING!</h2>
              <p className="font-pixel text-xl mb-6 text-white">
                Don't miss out on the coolest sites of the 90s. Sign our guestbook and join our mailing list!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="retro-button font-pixel">
                  <Star className="inline-block mr-2 w-5 h-5" />
                  SIGN GUESTBOOK
                </button>
                <button className="retro-button font-pixel">
                  <Mail className="inline-block mr-2 w-5 h-5" />
                  JOIN MAILING LIST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="retro-box text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-pixel mb-3 text-white">{title}</h3>
      <p className="font-comic text-retro-gray">{description}</p>
    </div>
  );
}
