// @ts-nocheck
import React from 'react';
import {
  TangoEventName,
  dispatchTangoEvent,
  ComponentPrototypeType,
} from '@music163/tango-helpers';
import { TouchableOpacity } from 'react-native';

export interface TangoEventButtonProps {
  children?: any;
  payload?: {
    type: 'insertChild' | 'replaceNode' | 'selectNode' | 'addComponent';
    targetId?: string;
    sourceName?: string | ComponentPrototypeType;
    meta?: {
      width?: number;
      height?: number;
      left?: number;
      top?: number;
      clientX?: number;
      clientY?: number;
    };
  };
}

export function TangoEventButton({ payload, children, ...rest }: TangoEventButtonProps) {
  return (
    <TouchableOpacity
      onPress={(e) => {
        const boundingData = (e.target as HTMLElement).getBoundingClientRect();
        const meta = {
          width: boundingData.width,
          height: boundingData.height,
          left: boundingData.left,
          top: boundingData.top,
          clientX: e.clientX,
          clientY: e.clientY,
        };
        dispatchTangoEvent(e.target, TangoEventName.DesignerAction, {
          ...payload,
          meta,
        });
      }}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
