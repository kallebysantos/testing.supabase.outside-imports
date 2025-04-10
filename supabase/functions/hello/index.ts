import "jsr:@supabase/functions-js/edge-runtime.d.ts";

import { add } from "@mylib";

console.log("Adding 2 + 1 = ", add(2, 1));

console.log("Hello from Functions!");

Deno.serve((_req) => {
  const data = {
    message: `Hello!`,
    add: add(2, 1),
  };

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  );
});
