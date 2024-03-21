import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../Header.vue";

describe("Header", () => {
  it("Should render correctly", async () => {
    const component = await mountSuspended(Header);

    expect(component.html()).toMatchInlineSnapshot(`"<header class="fixed top-0 w-full h-16 bg-yellow-500 border-b flex p-2 items-center gap-10 z-50"><a href="/"><img src="/jumbo-logo.png" class="object-contain h-12"></a></header>"`);
  });
});
