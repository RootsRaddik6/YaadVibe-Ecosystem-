// src/app/api/<folder>/route.ts
export async function GET() {
  return new Response(JSON.stringify({
    status: "ok",
    endpoint: "<transport>",
    message: "Minimal endpoint active"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
