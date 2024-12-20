import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Page: ComponentPrototypeType = {
  name: 'Page',
  title: '页面容器',
  icon: 'icon-page',
  type: 'page',
  package: 'snwit-android-components',
  hasChildren: true,
  props: [
    {
      name: 'title',
      title: '页面标题',
      setter: 'textSetter',
    },
    {
      name: 'subTitle',
      title: '副标题',
      setter: 'textSetter',
    },
    {
      name: 'backgroundColor',
      title: '背景',
      setter: 'bgSetter',
      group: 'style',
    },
  ],
  rules: {
    canMoveIn(incomingName) {
      console.log(incomingName,'incomingName');
      
      return ['Section', 'Columns', 'Box', 'When', 'Page', 'ScrollView', 'View'].includes(incomingName);
    },
  },
};
