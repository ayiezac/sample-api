exports.handler = async (event, context) => {
  const params = JSON.parse(event.body || '{}');
  const { a, b } = params;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Both 'a' and 'b' must be numbers." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ sum: a + b }),
  };
};
