/**
 * 路由别名，方便快速找到页面，同时可以用作路由跳转
 */
export enum RoutesAlias {
  // 布局和认证
  Layout = '/index/index', // 布局容器
  Login = '/auth/login', // 登录
  Register = '/auth/register', // 注册
  ForgetPassword = '/auth/forget-password', // 忘记密码

  // 异常页面
  Exception403 = '/exception/403', // 403
  Exception404 = '/exception/404', // 404
  Exception500 = '/exception/500', // 500

  Dashboard = '/dashboard', // AI大屏
  Surveillance = '/surveillance/index', // 视频监控
  Search = '/search/index', // 检索中心
  Alarm = '/alarm/index', // 告警纪律
  Algorithm = '/algorithm/index', // 算法仓库
  Resources = '/resources/index', // 资源管理

  // 系统管理
  User = '/system/user', // 账户
  Role = '/system/role', // 角色
  UserCenter = '/system/user-center', // 用户中心
  Menu = '/system/menu' // 菜单
}
