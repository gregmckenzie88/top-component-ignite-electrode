/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import TopComponentIgniteElectrode from "src/components/top-component-ignite-electrode";

describe("components/top-component-ignite-electrode", () => {

  describe("Mounting", () => {
    const data = [
      {
        summary: "summary 1",
        details: "details 1"
      },
      {
        summary: "summary 2",
        details: "details 2"
      },
      {
        summary: "summary 3",
        details: "details 3"
      }
    ];
    it("should render into the document", () => {
      const component = shallow(<TopComponentIgniteElectrode data={data}/>);
      expect(component).to.not.be.null;
    });

  });

});
