export default async (req, ctx) => {
  if (req.method !== "POST") {
    return ctx.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const data = JSON.parse(await req.body());
    console.log("Received data:", data);
    return {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({ message: "Data received successfully", data }),
    }
  } catch (error) {
    return{
      status: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({ error: error.message, message: "Invalid req body" }),
    }
  }
  // if (req.method === "POST") {
  //   const res = ctx.json({ message: 'you posted!' });

  //   res.headers.set("Access-Control-Allow-Origin", "*");
  //   res.headers.append("Access-Control-Allow-Headers", "*");
  //   res.headers.append("Access-Control-Allow-Methods", "*");

  //   return res;
  // } else if (req.method === "OPTIONS") {
  //   const res = new Response();

  //   res.headers.set("Access-Control-Allow-Origin", "*");
  //   res.headers.append("Access-Control-Allow-Headers", "*");
  //   res.headers.append("Access-Control-Allow-Methods", "*");

  //   return res;
  // }
};