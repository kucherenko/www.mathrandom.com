// @vitest-environment nuxt

import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Tags from "~/components/moleculas/Tags.vue";

describe("Tags", () => {
  it("should render tags", async () => {
    const component = await mountSuspended(Tags, {
      props: {
        tags: ["tag1", "tag2"]
      }
    })
    const links = component.findAll('a')
    expect(links.length).toBe(2)
    expect(component.text()).toBe('tag1tag2')
  });
})
