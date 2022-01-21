import { AttributeFormList } from '@/component/dragAttribute/attributeForm';
import { DragMenuListData, styleData } from '@/component/dragMenu';
import { getStyleByData, getStyleByKey } from '@/utils';

const inputAttribute: AttributeFormList[] = [
  {
    key: 'text',
    type: 'input',
    label: 'label',
    value: '',
    extraData: {},
  },
  {
    key: 'placeholder',
    type: 'input',
    label: 'placeholder',
    value: '',
    extraData: {},
  },
];

const inputElement: (
  style: styleData[],
  attributes?: Record<string, any> | undefined
) => React.FunctionComponentElement<any> = (style, attributes) => (
  <>
    <label style={getStyleByKey(['fontSize'], style)}>
      {attributes && attributes.text}
    </label>
    <input
      placeholder={attributes && attributes.placeholder}
      style={getStyleByData(style)}
    ></input>
  </>
);

export const inputData: DragMenuListData = {
  key: 'input',
  name: '输入框',
  icon: 'input',
  style: [
    {
      key: 'width',
      value: '200px',
      type: 'input',
      title: '宽度',
    },
    {
      key: 'height',
      value: '30px',
      type: 'input',
      title: '高度',
    },
  ],
  attributes: inputAttribute,
  element: inputElement,
};
