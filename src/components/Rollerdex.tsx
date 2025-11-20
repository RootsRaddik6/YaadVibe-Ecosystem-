import Image from "next/image";
import { getUiPath } from "@/lib/imageFallback";

// ... inside component use:
<Image
  src={getUiPath("springfarm")}
  alt={item.label}
  fill
  className="object-cover rounded-xl"
/>
