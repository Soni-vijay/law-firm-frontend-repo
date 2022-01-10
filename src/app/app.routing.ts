import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";

export const AppRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () =>
          import("./homepage/homepage.module").then((m) => m.HomepageModule),
      },
      {
        path: "admin",
        component: FullComponent,
        children: [
          {
            path: "",
            redirectTo: "/dashboard",
            //pathMatch: "full",
          },
          {
            path: "",
            loadChildren: () =>
              import("./material-component/material.module").then(
                (m) => m.MaterialComponentsModule
              ),
          },
          {
            path: "dashboard",
            loadChildren: () =>
              import("./dashboard/dashboard.module").then(
                (m) => m.DashboardModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];
