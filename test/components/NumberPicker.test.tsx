import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../../src/components/CounterButton";
import NumberPicker from '../../src/components/NumberPicker';
import NumberDisplayer from "../../src/components/NumberDisplayer";

describe("NumberPicker", () => {
  describe("render", () => {
    test('Debería renderizar los 3 átomos', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('div').children()).toHaveLength(3);
    });

    test('Debería renderizar 2 botones', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    test('Debería tener un span a 0', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('span').text()).toBe('0');
    });

    test('El primer botón debería ser un +', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });

    test('El primer botón debería ser un -', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });

    test('El orden debe ser el correcto -> + , 0, -', () => {
      const wrapper = shallow(<NumberPicker />);
      expect(wrapper.find("div").children().at(0).text()).toBe('+');
      expect(wrapper.find("div").children().at(1).text()).toBe('0');
      expect(wrapper.find("div").children().at(2).text()).toBe('-');
    });
  });
});
