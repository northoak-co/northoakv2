import { motion } from "framer-motion";

// Import local logos
import bluejLogo from "@/assets/logos/bluej.png";
import bonsaiLogo from "@/assets/logos/bonsai.png";
import boysgetsadtooLogo from "@/assets/logos/boysgetsadtoo.png";
import brightearlyLogo from "@/assets/logos/brightearly.png";
import dozrLogo from "@/assets/logos/dozr.png";
import egoLogo from "@/assets/logos/ego.png";
import favoredliveLogo from "@/assets/logos/favoredlive.png";
import flipgiveLogo from "@/assets/logos/flipgive.png";
import hewiLogo from "@/assets/logos/hewi.png";
import italistLogo from "@/assets/logos/italist.png";
import mybestbrandsLogo from "@/assets/logos/mybestbrands.png";
import novatioLogo from "@/assets/logos/novatio.png";
import prequelLogo from "@/assets/logos/prequel.png";
import raiserightLogo from "@/assets/logos/raiseright.png";
import stylightLogo from "@/assets/logos/stylight.png";
import triangleLogo from "@/assets/logos/triangle.png";
import truebeautyLogo from "@/assets/logos/truebeauty.png";
import unboundAcademyLogo from "@/assets/logos/unbound-academy.png";
import vennLogo from "@/assets/logos/venn.png";
import verishopLogo from "@/assets/logos/verishop.png";

const clients = [
  { name: "BlueJ", logo: bluejLogo },
  { name: "Bonsai", logo: bonsaiLogo },
  { name: "Boys Get Sad Too", logo: boysgetsadtooLogo },
  { name: "Bright Early", logo: brightearlyLogo },
  { name: "DOZR", logo: dozrLogo },
  { name: "EGO", logo: egoLogo },
  { name: "Favored Live", logo: favoredliveLogo },
  { name: "FlipGive", logo: flipgiveLogo },
  { name: "Hewi", logo: hewiLogo },
  { name: "Italist", logo: italistLogo },
  { name: "My Best Brands", logo: mybestbrandsLogo },
  { name: "Novatio", logo: novatioLogo },
  { name: "Prequel", logo: prequelLogo },
  { name: "RaiseRight", logo: raiserightLogo },
  { name: "Stylight", logo: stylightLogo },
  { name: "Triangle", logo: triangleLogo },
  { name: "True Beauty", logo: truebeautyLogo },
  { name: "Unbound Academy", logo: unboundAcademyLogo },
  { name: "Venn", logo: vennLogo },
  { name: "Verishop", logo: verishopLogo },
];

const ClientLogosCarousel = () => {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: [0, -50 * clients.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientLogosCarousel;
