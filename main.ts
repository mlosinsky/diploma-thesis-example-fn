export default {
  fetch(request: Request): Response {
    console.debug("this log isn't visible");
    console.log("In function, hello world!");
    console.log("URL="+request.url);
    console.log("EXAMPLE_ENV_VAR set", Deno.env.has("EXAMPLE_ENV_VAR"));
    console.log("EXAMPLE_ENV_VAR=", Deno.env.get("EXAMPLE_ENV_VAR"));
    return new Response("Hello, world! Method: " + request.method);
  },
};
