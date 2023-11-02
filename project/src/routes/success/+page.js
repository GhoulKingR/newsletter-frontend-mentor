import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(obj) {
  return {
    email: obj.url.searchParams.get("email"),
  };
}
