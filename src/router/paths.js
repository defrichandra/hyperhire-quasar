import Default from "@/layouts/Default.vue";
import Base from "@/pages/Base/Base.vue";

export default [
  {
    path: "/",
    name: "Default",
    component: Default,
    children: [{ path: "", name: "Base", component: Base }],
  },
];
