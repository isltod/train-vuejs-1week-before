import HomeView from '@/components/HomeView.vue'
import NotFound from '@/components/NotFound.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductView from '@/components/ProductView.vue'
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/components/AboutView.vue"),
    children: [
      {
        path: "intro",
        name: "Company intro",
        components: {
          header: () => import("@/components/company/CompanyHeader.vue"),
          body: () => import("@/components/company/IntroView.vue"),
          footer: () => import("@/components/company/CompanyFooter.vue")
        }
      },
      {
        path: "history",
        name: "Company history",
        components: {
          header: () => import("@/components/company/CompanyHeader.vue"),
          body: () => import("@/components/company/HistoryView.vue"),
          footer: () => import("@/components/company/CompanyFooter.vue")
        }
      },
      {
        path: "map",
        name: "Map",
        components: {
          header: () => import("@/components/company/CompanyHeader.vue"),
          body: () => import("@/components/company/MapView.vue"),
          footer: () => import("@/components/company/CompanyFooter.vue")
        }
      },
    ]
  },
  {
    path: "/service",
    redirect: "/product"
  },
  {
    path: "/product",
    name: "ProductPage",
    alias: "/products",
    component: ProductView,
    beforeEnter: (to, from, next) => {
      console.log("라우터별 가드 적용 위치...")
      if (from.fullPath != "/about/history") next()
    }
  },
  {
    path: "/product/:id",
    name: "Product detail page",
    component: ProductDetail
  },
  {
    // NotFound 404에러 페이지
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (from.fullPath == "/" && to.fullPath == "/about") return;
  next();
})
export default router
