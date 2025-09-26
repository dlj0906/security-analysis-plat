import { AppRouteRecord } from '@/types/router'
import { RoutesAlias } from '../routesAlias'

/**
 * 菜单列表、异步路由
 *
 * 支持两种模式:
 * 前端静态配置 - 直接使用本文件中定义的路由配置
 * 后端动态配置 - 后端返回菜单数据，前端解析生成路由
 *
 * 菜单标题（title）:
 * 可以是 i18n 的 key，也可以是字符串，比如：'用户列表'
 *
 * RoutesAlias.Layout 指向的是布局组件，后端返回的菜单数据中，component 字段需要指向 /index/index
 * 路由元数据（meta）：异步路由在 asyncRoutes 中配置，静态路由在 staticRoutes 中配置
 */
export const asyncRoutes: AppRouteRecord[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: RoutesAlias.Dashboard,
    meta: {
      title: 'menus.dashboard.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    name: 'Surveillance',
    path: '/surveillance',
    component: RoutesAlias.Surveillance,
    meta: {
      title: 'menus.surveillance.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    name: 'Search',
    path: '/search',
    component: RoutesAlias.Search,
    meta: {
      title: 'menus.search.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    name: 'Alarm',
    path: '/alarm',
    component: RoutesAlias.Alarm,
    meta: {
      title: 'menus.alarm.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    name: 'Algorithm',
    path: '/algorithm',
    component: RoutesAlias.Algorithm,
    meta: {
      title: 'menus.algorithm.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    name: 'Resources',
    path: '/resources',
    component: RoutesAlias.Resources,
    meta: {
      title: 'menus.resources.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN']
    }
  },
  {
    path: '/system',
    name: 'System',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.system.title',
      icon: '&#xe7b9;',
      roles: ['R_SUPER', 'R_ADMIN']
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: RoutesAlias.User,
        meta: {
          title: 'menus.system.user',
          keepAlive: true,
          roles: ['R_SUPER', 'R_ADMIN']
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: RoutesAlias.Role,
        meta: {
          title: 'menus.system.role',
          keepAlive: true,
          roles: ['R_SUPER']
        }
      },
      {
        path: 'user-center',
        name: 'UserCenter',
        component: RoutesAlias.UserCenter,
        meta: {
          title: 'menus.system.userCenter',
          isHide: true,
          keepAlive: true,
          isHideTab: true
        }
      },
      {
        path: 'menu',
        name: 'Menus',
        component: RoutesAlias.Menu,
        meta: {
          title: 'menus.system.menu',
          keepAlive: true,
          roles: ['R_SUPER'],
          authList: [
            {
              title: '新增',
              authMark: 'add'
            },
            {
              title: '编辑',
              authMark: 'edit'
            },
            {
              title: '删除',
              authMark: 'delete'
            }
          ]
        }
      }
    ]
  }
]
