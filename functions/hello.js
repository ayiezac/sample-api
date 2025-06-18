exports.handler = async (_event, _context) => {
  return {
    statusCode: 200,
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({ message: "Hello from Netlify!" }),
  };
};
