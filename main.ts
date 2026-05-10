export default {
  fetch(request: Request): Response {
    console.debug("this log isn't visible");
    console.log("In function, hello world!");
    console.log("URL="+request.url);
    console.log("TEST set", Deno.env.has("TEST"));
    console.log("TEST=", Deno.env.get("TEST"));
    return new Response("Hello, world! Method: " + request.method);
  },
};
