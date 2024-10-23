import VueBrandsIcon from '../../../components/icon/category/VueBrandsIcon.vue'
import GitHubBrandsIcon from '../../../components/icon/category/GitHubBrandsIcon.vue'
import FireDuotoneIcon from '../../../components/icon/category/FireDuotoneIcon.vue'
import CodeCompareDuotoneIcon from '../../../components/icon/category/CodeCompareDuotoneIcon.vue'
import WhaleDuotoneIcon from '../../../components/icon/category/WhaleDuotoneIcon.vue'
import MountainsDuotoneIcon from '../../../components/icon/category/MountainsDuotoneIcon.vue'
import BookDuotoneIcon from '../../icon/category/BookDuotoneIcon.vue'
import AppleBrandsIcon from '../../icon/category/AppleBrandsIcon.vue'
import AWSBrandsIcon from '../../icon/category/AWSBrandsIcon.vue'
import RectangleTerminalDuotoneIcon from '../../icon/category/RectangleTerminalDuotoneIcon.vue'
import DatabaseDuotoneIcon from '../../icon/category/DatabaseDuotoneIcon.vue'
import CodeDuotoneIcon from '../../icon/category/CodeDuotoneIcon.vue'
import GoogleBrandsIcon from '../../icon/category/GoogleBrandsIcon.vue'
import GlobeDuotoneIcon from '../../icon/category/GlobeDuotoneIcon.vue'
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
  {
    name: 'Active Directory',
    description: '1 本の記事',
    path: `/${lang}/blog/tech/activedirectory`,
    icon: BookDuotoneIcon,
  },
  {
    name: 'Apple',
    description: '2 本の記事',
    path: `/${lang}/blog/tech/apple`,
    icon: AppleBrandsIcon,
  },
  {
    name: 'AWS',
    description: '1 本の記事',
    path: `/${lang}/blog/tech/aws`,
    icon: AWSBrandsIcon,
  },
  {
    name: 'コマンドプロンプト',
    description: '2 本の記事',
    path: `/${lang}/blog/tech/bat`,
    icon: RectangleTerminalDuotoneIcon,
  },
  {
    name: '技術書',
    description: '1 本の記事',
    path: `/${lang}/blog/tech/book`,
    icon: BookDuotoneIcon,
  },
  {
    name: 'データベース',
    description: '1 本の記事',
    path: `/${lang}/blog/tech/database`,
    icon: DatabaseDuotoneIcon,
  },
  {
    name: '開発',
    description: '8 本の記事',
    path: `/${lang}/blog/tech/dev`,
    icon: CodeDuotoneIcon,
  },
  {
    name: 'Google',
    description: '2 本の記事',
    path: `/${lang}/blog/tech/google`,
    icon: GoogleBrandsIcon,
  },
  {
    name: 'web',
    description: '1 本の記事',
    path: `/${lang}/blog/tech/web`,
    icon: GlobeDuotoneIcon,
  },
]
