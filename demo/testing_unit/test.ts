import { test, assert, equal, runTests } from "https://deno.land/x/testing/mod.ts";
import { add, addAsync } from "./mod.ts";

test(function example() {
  const result = add(1, 2);
  assert(equal(result, 3));
  assert.equal({ result }, { result: 3 });
});

test(async function exampleAsync() {
  const result = await addAsync(1, 2);
  assert(equal(result, 3));
  assert.equal({ result }, { result: 3 });
});

runTests();