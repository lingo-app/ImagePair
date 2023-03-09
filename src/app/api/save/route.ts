export async function POST(request: Request) {
  const json = request.json()
  console.log(json)
  return new Response('Image saved');
}
