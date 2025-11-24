// src/app/api/<folder>/route.ts
export async function GET() {
  return new Response(JSON.stringify({
    status: "ok",
    endpoint: "<attractions>",
    message: "Minimal endpoint active"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
