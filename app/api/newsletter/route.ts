export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const basinEndpoint = process.env.BASIN_ENDPOINT;

    if (!basinEndpoint) {
      console.error('Missing Basin endpoint');
      return Response.json(
        { error: 'Newsletter service unavailable' },
        { status: 500 }
      );
    }

    const response = await fetch(basinEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        signup_date: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Basin API error');
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return Response.json(
      { error: 'Failed to save newsletter signup' },
      { status: 500 }
    );
  }
}
