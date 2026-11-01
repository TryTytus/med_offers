import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/poster/:posterId", "routes/poster.tsx")

] satisfies RouteConfig;
