import { shallow } from "enzyme";
import App from "src/App";

const testName = "AppTest boundary";

describe("boundary", () => {
  test(testName + " should mount App without crashing", () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
    component.unmount();
  });
});
