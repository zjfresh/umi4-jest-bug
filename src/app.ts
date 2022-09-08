// 运行时配置
import logoPng from '@/assets/logo@2x.png';
console.log('🚀 ~ file: app.ts ~ line 3 ~ logoPng', logoPng);

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: logoPng,
    menu: {
      locale: false,
    },
  };
};
