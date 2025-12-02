import { Crown, Sword, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RankCardProps {
  name: string;
  description: string;
  perks: string[];
  icon: "crown" | "sword" | "shield" | "star";
  featured?: boolean;
}

const icons = {
  crown: Crown,
  sword: Sword,
  shield: Shield,
  star: Star,
};

export function RankCard({ name, description, perks, icon, featured }: RankCardProps) {
  const Icon = icons[icon];

  return (
    <div className={`relative bg-card border-2 rounded-lg p-6 card-hover group ${
      featured ? "border-primary minecraft-glow" : "border-primary/30"
    }`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="font-pixel text-[10px] bg-primary text-primary-foreground px-3 py-1 rounded">
            POPULAR
          </span>
        </div>
      )}

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
            featured ? "bg-primary/30 animate-pulse-glow" : "bg-primary/20"
          }`}>
            <Icon className={`w-10 h-10 ${featured ? "text-primary" : "text-primary/80"}`} />
          </div>
        </div>

        {/* Rank Name */}
        <h3 className="font-pixel text-sm text-primary text-center mb-2 text-glow">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-6">
          {description}
        </p>

        {/* Perks List */}
        <div className="space-y-2 mb-6">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-sm flex-shrink-0" />
              <span className="text-sm text-secondary-foreground">{perk}</span>
            </div>
          ))}
        </div>

        {/* Buy Button */}
        <a 
          href="https://discord.arixmc.fun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant={featured ? "hero" : "minecraft"} className="w-full">
            Buy Now
          </Button>
        </a>
      </div>
    </div>
  );
}
