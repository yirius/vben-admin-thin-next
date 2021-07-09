import { loadModule } from 'vue3-sfc-loader';
import * as Vue from 'vue';
import * as AntDesignVue from 'ant-design-vue';
import { getToken } from '/@/utils/auth';

// 引入vue router
import * as vueRouter from 'vue-router';

// 引入http组件
import * as utils from '/@/utils';
import * as utilsHttpAxios from '/@/utils/http/axios';
import * as hooksWebUsePage from '/@/hooks/web/usePage';
import * as hooksWebUseI18n from '/@/hooks/web/useI18n';

// 引入自定义组件
const allComponents = {
  Application: await import('/@/components/Application/index'),
  Authority: await import('/@/components/Authority/index'),
  Basic: await import('/@/components/Basic/index'),
  Button: await import('/@/components/Button/index'),
  ClickOutSide: await import('/@/components/ClickOutSide/index'),
  CodeEditor: await import('/@/components/CodeEditor/index'),
  Container: await import('/@/components/Container/index'),
  ContextMenu: await import('/@/components/ContextMenu/index'),
  CountDown: await import('/@/components/CountDown/index'),
  CountTo: await import('/@/components/CountTo/index'),
  Cropper: await import('/@/components/Cropper/index'),
  Description: await import('/@/components/Description/index'),
  Drawer: await import('/@/components/Drawer/index'),
  Excel: await import('/@/components/Excel/index'),
  FlowChart: await import('/@/components/FlowChart/index'),
  Form: await import('/@/components/Form/index'),
  Icon: await import('/@/components/Icon/index'),
  Loading: await import('/@/components/Loading/index'),
  Markdown: await import('/@/components/Markdown/index'),
  Menu: await import('/@/components/Menu/index'),
  Modal: await import('/@/components/Modal/index'),
  Page: await import('/@/components/Page/index'),
  Preview: await import('/@/components/Preview/index'),
  Qrcode: await import('/@/components/Qrcode/index'),
  Scrollbar: await import('/@/components/Scrollbar/index'),
  SimpleMenu: await import('/@/components/SimpleMenu/index'),
  StrengthMeter: await import('/@/components/StrengthMeter/index'),
  Table: await import('/@/components/Table/index'),
  Time: await import('/@/components/Time/index'),
  Tinymce: await import('/@/components/Tinymce/index'),
  Transition: await import('/@/components/Transition/index'),
  Tree: await import('/@/components/Tree/index'),
  Upload: await import('/@/components/Upload/index'),
  Verify: await import('/@/components/Verify/index'),
  VirtualScroll: await import('/@/components/VirtualScroll/index'),
};

const moduleCache = {
  vue: Vue,
  'vue-router': vueRouter,
  'ant-design-vue': AntDesignVue,

  '/@/utils': utils,
  '/@/utils/http/axios': utilsHttpAxios,
  '/@/hooks/web/usePage': hooksWebUsePage,
  '/@/hooks/web/useI18n': hooksWebUseI18n,
};

for (const key in allComponents) {
  if (Object.prototype.hasOwnProperty.call(allComponents, key)) {
    moduleCache['/@/components/' + key] = allComponents[key];
    moduleCache['/@/components/' + key + '/index'] = allComponents[key];
  }
}

export const loadModuleOptions = {
  moduleCache: moduleCache,
  getFile: (url) => {
    return fetch(url, {
      headers: {
        'Access-Token': <string>getToken(),
      },
    }).then((res) => res.text());
  },
  addStyle: () => {},
};

export function asyncLoadModule(component, options) {
  return loadModule(component, options);
}
