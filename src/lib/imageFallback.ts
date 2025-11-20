// src/lib/imageFallback.ts

export function getUiPath(name: string) {
  const map: Record<string,string> = {
    flag: "/ui/IMG_0460.jpeg",
    background: "/ui/IMG_0039.jpeg",
    springfarm: "/ui/camera_1760355457294.jpeg",
    devonhouse: "/ui/IMG_0090.jpeg",
    eastoakridge: "/ui/IMG_0142.jpeg",
    sunrise: "/ui/camera_1761045942319.jpeg",
  };

  // fallback is background
  return map[name] ?? "/ui/IMG_0039.jpeg";
}
