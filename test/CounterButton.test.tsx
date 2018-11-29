import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButtonComplete from "../src/components/CounterButtonComplete";
import CounterButton from "../src/components/CounterButton";
import NumberPicker from '../src/components/NumberPicker';
import NumberDisplayer from "../src/components/NumberDisplayer";

describe("CounterButtonComplete", () => {
  describe("render", () => {
    test("Debería renderizar el boton del contador = 0 (init)", () => {
      const wrapper = shallow(<CounterButtonComplete />);
      expect(wrapper.find("button").text()).toBe("0");
    });
    test("Debería aumentar el estado actual de contador y sumarle uno", () => {
      const wrapper = shallow(<CounterButtonComplete />);
      wrapper.find("button").simulate("click");
      expect(wrapper.find("button").text()).toBe("1");
    });
  });
});


describe("NumberPicker", () => {
  describe("render", () => {
    test("Debería renderizar un boton con + como texto", () => {
      const wrapper = shallow(<CounterButton buttonSymbol={"+"} />);
      expect(wrapper.find("button").text()).toBe("+");
    });
    test("Debería renderizar un boton con - como texto", () => {
      const wrapper = shallow(<CounterButton buttonSymbol={"-"} />);
      expect(wrapper.find("button").text()).toBe("-");
    });
    test("Debería renderizar un displayer con el número 0", () => {
      const wrapper = shallow(<NumberDisplayer numberToDisplay={0} />);
      expect(wrapper.find("div").text()).toBe("0");
    });
  });
});
