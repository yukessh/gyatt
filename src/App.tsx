import React, { useState } from 'react';
import { 
  Rocket, 
  Brain, 
  PieChart, 
  ShoppingCart, 
  Map, 
  Users,
  Moon,
  Sun,
  Twitter,
  MessageCircle,
  ExternalLink,
  X
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [socialPopupContent, setSocialPopupContent] = useState({ title: '', message: '' });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const showTrollPopup = (type: 'twitter' | 'telegram' | 'bscscan') => {
    const content = {
      twitter: {
        title: "Twitter? More like Quitter! 🐦",
        message: "We're too busy making gains to tweet. Follow your heart instead!"
      },
      telegram: {
        title: "Telegram? OK Boomer! 📱",
        message: "Real degens don't need group chats. Buy first, ask questions never!"
      },
      bscscan: {
        title: "Looking for Contract? 🔍",
        message: "Contracts are for nerds! Just ape in and hope for the best!"
      }
    }[type];

    setSocialPopupContent(content);
    setShowSocialPopup(true);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-green-100 dark:from-purple-900 dark:to-black text-gray-900 dark:text-white">
        {/* Social Popup */}
        {showSocialPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full relative">
              <button 
                onClick={() => setShowSocialPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{socialPopupContent.title}</h3>
                <p className="text-lg">{socialPopupContent.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navbar */}
        <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-40">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <Rocket className="inline-block" /> $GYT
            </div>
            <div className="flex items-center gap-6">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <a 
                href="https://www.pink.meme/token/bsc/0x9a23fe850b0518d049ed8a1ecd30a2efcebfe893" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        </nav>

        {/* Live Price Ticker */}
        <div className="bg-black text-white py-2 overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            <span className="text-lg font-bold">🚀 Sale goes live on PinkSale - February 12th, 00:00 AM! Don't miss out! 🚀</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="container mx-auto text-center relative z-10">
            <div className="bg-white/90 dark:bg-black/90 p-8 rounded-3xl backdrop-blur-md">
            <img src="/Gyaat_logo.jpg" alt="GYAT Logo" className="w-48 h-48 mx-auto mb-8" />
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-400 text-transparent bg-clip-text">
                Bro... GYAT Some Self-Control! 🚀
              </h1>
              <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">
                The internet's thirstiest meme just got a token. No utility, no roadmap, just vibes.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.pink.meme/token/bsc/0x9a23fe850b0518d049ed8a1ecd30a2efcebfe893"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors"
                >
                  Buy on PinkSale
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white/50 dark:bg-black/50">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Brain className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl font-bold ml-4">What Even Is This? 🤯</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-xl">
                  The most unhinged token on the blockchain. Inspired by the internet's most down-bad moments,
                  $GYAT is here to break the charts (and your self-control).
                </p>
                <p className="text-xl">
                  $GYAT is not just a memecoin. It's a lifestyle. A movement. A declaration of degeneracy.
                </p>
                <p className="text-xl">
                  No promises, no fake utility, just 100% pure meme energy.
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Why $GYAT?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Because it's funny. (That's the only reason.)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Because memes = money. (Doge, Pepecoin, Bonk, and now… GYAT!)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    Because FOMO is real. (You don't want to be that guy who missed it.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <PieChart className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl font-bold ml-4">Tokenomics 📊</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Supply</h3>
                <p className="text-4xl font-bold text-purple-600">1 Trillion</p>
                <p className="text-gray-600 dark:text-gray-400">Total $GYAT</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Liquidity</h3>
                <p className="text-4xl font-bold text-green-500">40%</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Tax</h3>
                <p className="text-4xl font-bold text-purple-600">0%</p>
                <p className="text-gray-600 dark:text-gray-400">Buy/Sell</p>
              </div>
            </div>
            <div className="mt-12 bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Token Distribution</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600">40%</p>
                  <p className="text-lg">Liquidity</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">60%</p>
                  <p className="text-lg">Presale Allocation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-20 px-4 bg-white/50 dark:bg-black/50">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <ShoppingCart className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl font-bold ml-4">How to Buy 🛒</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <span className="text-2xl font-bold mr-4">1</span>
                  <p className="text-xl">Get a MetaMask or Trust Wallet 🦊</p>
                </div>
                <div className="flex items-center bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <span className="text-2xl font-bold mr-4">2</span>
                  <p className="text-xl">Load it with BNB 💰</p>
                </div>
                <div className="flex items-center bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <span className="text-2xl font-bold mr-4">3</span>
                  <p className="text-xl">Go to PinkSale & Buy $GYAT 🚀</p>
                </div>
                <div className="flex items-center bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <span className="text-2xl font-bold mr-4">4</span>
                  <p className="text-xl">Add the $GYAT Contract to Your Wallet 📲</p>
                </div>
                <div className="flex items-center bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <span className="text-2xl font-bold mr-4">5</span>
                  <p className="text-xl">Hold & Pray for Moon 📈</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <a 
                  href="https://www.pink.meme/token/bsc/0x9a23fe850b0518d049ed8a1ecd30a2efcebfe893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors"
                >
                  Buy Now on PinkSale
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Map className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl font-bold ml-4">Roadmap 🚧</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-green-500">Phase 1: The Birth of $GYAT</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      Launch on PinkSale
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      Get People Talking (Shilling 24/7)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      Create Memes
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors"></div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">Phase 2: The Takeover</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">⏳</span>
                      Trend on Twitter & Telegram
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">⏳</span>
                      First 10,000 Holders
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 mr-2">⏳</span>
                      Airdrops & Giveaways
                    </li>
                  </ul>
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-2xl font-bold text-yellow-500 text-center p-4">
                      JK! We're not doing any of this! 
                      <br/>
                      🤡 You really thought? 🤡
                    </p>
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-red-500">Phase 3: The GYAT Apocalypse</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">🚀</span>
                      $GYAT to $1? Probably Not, But Let's Try
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">🚀</span>
                      Listing on Pancakeswap
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">🚀</span>
                      The Internet Will Never Be the Same
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20 px-4 bg-white/50 dark:bg-black/50">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Users className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl font-bold ml-4">Join the Fun 🎉</h2>
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-2xl mb-8">If you're not in, you're NGMI.</p>
              <div className="flex justify-center gap-6">
                <button 
                  onClick={() => showTrollPopup('twitter')}
                  className="flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                  Twitter
                </button>
                <button
                  onClick={() => showTrollPopup('telegram')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  Telegram
                </button>
                <button
                  onClick={() => showTrollPopup('bscscan')}
                  className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                  BSCScan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl font-bold mb-4">Buy Now or Forever Cope. 🚀</p>
            <p className="text-gray-400">The $GYAT Army Awaits.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;