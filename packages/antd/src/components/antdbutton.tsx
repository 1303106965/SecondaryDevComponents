// import { defineComponent } from '@music163/tango-boot';
import { defineComponent } from '../helpers';

import { Button as AntButton } from 'antd';

export const AntdButton = defineComponent(AntButton, {
  name: 'Button',
});

export const AntdButtonGroup = defineComponent(AntButton.Group, {
  name: 'ButtonGroup',
});
