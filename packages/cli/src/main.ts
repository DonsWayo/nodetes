import { awesomeFn } from "@nodetes/core";

export async function main() {
  // dependencies across child packages
  const out = await awesomeFn();
  return out;
}
