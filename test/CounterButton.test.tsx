import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../src/components/CounterButton";

describe('CounterButton', () => {
  describe('render', () => {
    test('Debería renderizar el boton del contador = 0 (init)', () => {
      const wrapper = shallow(<CounterButton />);
      expect(wrapper.find("button").text()).toBe("0");
    });
    test("Debería aumentar el estado actual de contador y sumarle uno", () => {
      const wrapper = shallow(<CounterButton />);
      wrapper.find("button").simulate("click");
      expect(wrapper.find("button").text()).toBe("1");
    });
  });
});
