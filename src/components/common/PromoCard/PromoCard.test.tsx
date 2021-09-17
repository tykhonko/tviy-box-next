import React from "react";
import { shallow } from "enzyme";
import PromoCard from "./PromoCard";
import { routes } from "utils/routing";

describe("PromoCard component", () => {
  const props = {
    text: "Some Text",
    backgroundImage: "https://i.redd.it/2znd3f43omk71.png",
    buttonText: "Button text",
    route: routes.catalogue(),
  };

  it("Should render PromoCard component", () => {
    const component = shallow(<PromoCard {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("Should render background image", () => {
    // const wrapper = shallow(<PromoCard {...minProps} text="text" />);
    // const image = wrapper.props();
    // console.log("PROPS", image);
    // expect(backgroundImage.length).toBe(1);
  });
});
