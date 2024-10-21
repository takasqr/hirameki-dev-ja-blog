import VueBrandsIcon from '../../../components/icon/category/VueBrandsIcon.vue'
import GitHubBrandsIcon from '../../../components/icon/category/GitHubBrandsIcon.vue'
import FireDuotoneIcon from '../../../components/icon/category/FireDuotoneIcon.vue'
import CodeCompareDuotoneIcon from '../../../components/icon/category/CodeCompareDuotoneIcon.vue'
import WhaleDuotoneIcon from '../../../components/icon/category/WhaleDuotoneIcon.vue'
import MountainsDuotoneIcon from '../../../components/icon/category/MountainsDuotoneIcon.vue'
import type { Category } from '../../../components/types/Category'

const lang = 'ja'

export const categoriesTechBlog: Category[] = [
  {
    name: 'Vue',
    description: '16 本の記事',
    path: `/${lang}/blog/tech/vuejs`,
    icon: VueBrandsIcon,
  },
  {
    name: 'Firebase',
    description: '12 本の記事',
    path: `/${lang}/blog/tech/firebase`,
    icon: FireDuotoneIcon,
  },
  {
    name: 'Nuxt',
    description: '2 本の記事',
    path: `/${lang}/blog/tech/nuxtjs`,
    icon: MountainsDuotoneIcon,
  },
  {
    name: 'Docker',
    description: '11 本の記事',
    path: `/${lang}/blog/tech/docker`,
    icon: WhaleDuotoneIcon,
  },
  {
    name: 'Git',
    description: '3 本の記事',
    path: `/${lang}/blog/tech/git`,
    icon: CodeCompareDuotoneIcon,
  },
  {
    name: 'GitHub',
    description: '2 本の記事',
    path: `/${lang}/blog/tech/github`,
    icon: GitHubBrandsIcon,
  },
]
