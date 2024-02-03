export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === "/customers") return navigateTo("/login");
  else if (user.value && to.path === "/login") return navigateTo("/customers");
});
