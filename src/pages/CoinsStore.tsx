import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CoinCard } from "@/components/CoinCard";
import { BlockPattern } from "@/components/BlockPattern";

const coinPackages = [
  { coins: 100, price: 10 },
  { coins: 500, price: 50 },
  { coins: 1000, price: 100 },
  { coins: 5000, price: 500 },
  { coins: 10000, price: 1000 },
  { coins: 25000, price: 2500 },
  { coins: 50000, price: 5000 },
];

const CoinsStore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <BlockPattern />
        <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-pixel text-xl md:text-3xl text-primary mb-4 text-glow">
              Coin Store
            </h1>
            <p className="text-secondary-foreground mb-4">
              Purchase coins to unlock items, cosmetics, and more on ArixMC!
            </p>
            <div className="inline-block bg-card/50 border-2 border-primary/30 rounded-lg px-4 py-2">
              <p className="font-pixel text-xs text-muted-foreground">
                RATE: <span className="text-primary">10 Rs = 100 Coins</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coins Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coinPackages.map((pkg) => (
              <CoinCard key={pkg.coins} coins={pkg.coins} price={pkg.price} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-pixel text-sm text-primary mb-4">How to Purchase</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4 p-4 bg-card border border-primary/20 rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                  <span className="font-pixel text-xs text-primary">1</span>
                </div>
                <div>
                  <p className="text-secondary-foreground">
                    Click "Buy Now" on your desired coin package
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card border border-primary/20 rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                  <span className="font-pixel text-xs text-primary">2</span>
                </div>
                <div>
                  <p className="text-secondary-foreground">
                    Join our Discord server and create a support ticket
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card border border-primary/20 rounded-lg">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                  <span className="font-pixel text-xs text-primary">3</span>
                </div>
                <div>
                  <p className="text-secondary-foreground">
                    Complete payment and receive your coins instantly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoinsStore;
