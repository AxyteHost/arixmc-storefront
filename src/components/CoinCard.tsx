import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoinCardProps {
  coins: number;
  price: number;
}

export function CoinCard({ coins, price }: CoinCardProps) {
  const formattedCoins = coins.toLocaleString();
  const formattedPrice = price.toLocaleString();

  return (
    <div className="relative bg-card border-2 border-primary/30 rounded-lg p-6 card-hover group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Coin Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Coins className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Coins Amount */}
        <h3 className="font-pixel text-lg text-primary text-center mb-2 text-glow">
          {formattedCoins}
        </h3>
        <p className="font-pixel text-xs text-muted-foreground text-center mb-4">
          COINS
        </p>

        {/* Price */}
        <div className="text-center mb-6">
          <span className="font-pixel text-2xl text-secondary-foreground">
            ₹{formattedPrice}
          </span>
        </div>

        {/* Buy Button */}
        <a 
          href="https://discord.arixmc.fun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="minecraft" className="w-full">
            Buy Now
          </Button>
        </a>
      </div>
    </div>
  );
}
