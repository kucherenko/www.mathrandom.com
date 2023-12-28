// @vitest-environment nuxt

import { describe, it, expect } from "vitest";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import Link from "~/components/moleculas/Link.vue";

describe("Link", () => {
  it.each([
    ['https://google.com', 'fas,external-link-alt'],
    ['https://twitter.com/@aa', 'fab,twitter'],
    ['https://github.com/ololo', 'fab,github'],
    ['https://facebook.com/ololo', 'fab,facebook'],
    ['https://speakerdeck.com/ololo', 'fab,speaker-deck'],
    ['https://medium.com/ololo', 'fab,medium'],
    ['https://t.me/ololo', 'fab,telegram'],
    ['https://youtube.com/ololo', 'fab,youtube'],
    ['https://meetup.com/ololo', 'fab,meetup'],
    ['https://linkedin.com/ololo', 'fab,linkedin'],
    ['https://producthunt.com/ololo', 'fab,product-hunt'],
    ['https://patreon.com/ololo', 'fab,patreon'],
    ['https://npmjs.com/ololo', 'fab,npm'],
    ['https://instagram.com/ololo', 'fab,instagram'],
    ['https://tiktok.com/ololo', 'fab,tiktok'],
    ['https://vk.com/ololo', 'fab,vk'],
  ])("should render the link %s with icon %s", async (href, icon) => {
    const link = await mountSuspended(Link, {
      props: {href}
    })
    console.log(link.html())
    expect(link.html()).include(icon)
  })

})
