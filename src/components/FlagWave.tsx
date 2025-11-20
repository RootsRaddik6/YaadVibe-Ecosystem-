import Image from "next/image";
import Flag from "@/public/ui/flag.png";

export default function FlagWave() {
  return (
    <div className="fixed top-4 left-4 z-50 animate-flagwave">
      <Image src={Flag} alt="Flag" width={55} height={55} />
      <style jsx>{`
        @keyframes flagwave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-flagwave {
          animation: flagwave 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
