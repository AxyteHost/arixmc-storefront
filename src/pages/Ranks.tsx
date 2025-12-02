import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RankCard } from "@/components/RankCard";
import { BlockPattern } from "@/components/BlockPattern";

const ranks = [
  {
    name: "Assassin Rank",
    icon: "sword" as const,
    description: "Swift and deadly, perfect for PvP enthusiasts who dominate the battlefield.",
    perks: [
      "Custom /nick command",
      "Access to /fly in lobby",
      "3x daily rewards bonus",
      "Exclusive Assassin kit",
      "Priority queue access",
    ],
  },
  {
    name: "Supreme Rank",
    icon: "crown" as const,
    description: "The ultimate rank for those who want it all. Maximum prestige and benefits.",
    perks: [
      "All Assassin perks included",
      "Custom particle effects",
      "5x daily rewards bonus",
      "Exclusive Supreme cosmetics",
      "VIP support channel access",
      "Monthly exclusive items",
    ],
    featured: true,
  },
  {
    name: "Channe Rank",
    icon: "shield" as const,
    description: "A solid choice for regular players looking to enhance their experience.",
    perks: [
      "Access to /hat command",
      "2x daily rewards bonus",
      "Exclusive Channe kit",
      "Custom chat color",
      "Reserved slot access",
    ],
  },
  {
    name: "OG Rank",
    icon: "star" as const,
    description: "Show off your veteran status with this legendary rank for true OG players.",
    perks: [
      "Exclusive OG prefix",
      "Legacy cosmetic items",
      "2x daily rewards bonus",
      "Special OG kit",
      "Access to OG-only events",
    ],
  },
];

const Ranks = () => {
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
              Premium Ranks
            </h1>
            <p className="text-secondary-foreground">
              Unlock exclusive perks, cosmetics, and abilities with our premium ranks. 
              Stand out from the crowd and dominate the server!
            </p>
          </div>
        </div>
      </section>

      {/* Ranks Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ranks.map((rank) => (
              <RankCard
                key={rank.name}
                name={rank.name}
                icon={rank.icon}
                description={rank.description}
                perks={rank.perks}
                featured={rank.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-pixel text-sm text-primary mb-4">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-6">
              Join our Discord server and our staff will help you find the perfect rank 
              for your playstyle. All purchases are handled through our secure Discord ticket system.
            </p>
            <a 
              href="https://discord.arixmc.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-card border-2 border-primary/30 rounded-lg px-6 py-3 hover:border-primary transition-colors">
                <p className="font-pixel text-xs text-primary">discord.arixmc.fun</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ranks;
