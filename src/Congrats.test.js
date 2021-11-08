import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";

import Congrats from "../src/Congrats";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("should render without a error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("should render no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("should not render a empty congrats message when success is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});
