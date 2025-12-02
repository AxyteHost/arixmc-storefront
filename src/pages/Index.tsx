import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlockPattern } from "@/components/BlockPattern";
import { Coins, Crown, Pickaxe, Sword } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <BlockPattern />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark via-transparent to-minecraft-dark" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo Placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-primary/20 rounded-lg border-4 border-primary flex items-center justify-center animate-float minecraft-glow">
                <Pickaxe className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-pixel text-2xl md:text-4xl text-primary mb-4 text-glow leading-relaxed">
              ArixMC
            </h1>
            <p className="font-pixel text-xs md:text-sm text-muted-foreground mb-2">
              OFFICIAL WEBSTORE
            </p>
            <p className="text-lg text-secondary-foreground mb-12 max-w-2xl mx-auto">
              Enhance your gameplay experience with exclusive coins and premium ranks. 
              Join thousands of players on ArixMC!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/coins">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-3">
                  <Coins className="w-5 h-5" />
                  Buy Coins
                </Button>
              </Link>
              <Link to="/ranks">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-3 font-pixel text-xs">
                  <Crown className="w-5 h-5" />
                  Premium Ranks
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-lg md:text-xl text-primary text-center mb-4 text-glow">
            Why Choose ArixMC?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            The ultimate Minecraft experience awaits you
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-card border-2 border-primary/20 rounded-lg card-hover">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sword className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-pixel text-xs text-primary mb-2">Epic Gameplay</h3>
              <p className="text-sm text-muted-foreground">
                Experience thrilling PvP, survival, and custom game modes
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-card border-2 border-primary/20 rounded-lg card-hover">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-pixel text-xs text-primary mb-2">Fair Economy</h3>
              <p className="text-sm text-muted-foreground">
                Balanced coin system with great value packages
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-card border-2 border-primary/20 rounded-lg card-hover">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-pixel text-xs text-primary mb-2">Premium Perks</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive ranks with amazing benefits and cosmetics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block Texture Section */}
      <section className="py-20 relative overflow-hidden">
        <BlockPattern />
        <div className="absolute inset-0 bg-minecraft-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-pixel text-lg md:text-xl text-primary mb-4 text-glow">
              Ready to Play?
            </h2>
            <p className="text-secondary-foreground mb-8">
              Connect to our server and start your adventure today. Purchase coins or ranks 
              to unlock exclusive perks and dominate the leaderboards!
            </p>
            <div className="bg-card/50 border-2 border-primary/30 rounded-lg p-6 inline-block">
              <p className="font-pixel text-xs text-muted-foreground mb-2">SERVER IP</p>
              <p className="font-pixel text-lg text-primary text-glow">play.arixmc.fun</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
