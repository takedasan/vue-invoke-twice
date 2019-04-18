import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Home
    }
  ]
});

router.beforeEach((to, from, next) => {
  // ホントならここで認証情報を取得する
  const isAuth = false;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (isAuth) {
    // 認証状態はそのまま遷移
    next();
  } else if (requiresAuth) {
    // 認証してないのでログイン画面へ
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    // 認証が必要ないのでそのまま遷移
    next();
  }
});

export default router;
