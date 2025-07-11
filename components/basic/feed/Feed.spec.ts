// @vitest-environment nuxt
import { describe, it, expect, beforeEach } from 'vitest'
import type { VueWrapper } from '@vue/test-utils';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Feed from './Feed.vue'
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Applied to',
    date: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    date: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    date: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

describe('Feed.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = await mountSuspended(Feed, {
      props: {
        timeline: timeline
      },
      route: '/test'
    })
  })

  it('タイムラインが正しく表示されること', async () => {
    const events = wrapper.findAll('li')
    expect(events).toHaveLength(timeline.length)

    events.forEach((event, index) => {
      expect(event.text()).toContain(timeline[index].content)
      expect(event.text()).toContain(timeline[index].date)
    })
  })

  it('各イベントに正しいアイコンと背景色が設定されていること', async () => {
    timeline.forEach((item, index) => {
      const eventIconWrapper = wrapper.findAll('.flex.items-center')[index]
      expect(eventIconWrapper.classes()).toContain(item.iconBackground)
    })
  })
})
