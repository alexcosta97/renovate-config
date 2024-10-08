import { migrateAndValidate } from "renovate/dist/config/migrate-validate.js";
import config from "./default.json" with { type: "json" };

describe("@alexcosta97/renovate-config", () => {
  it("has a renovate config", () => {
    expect.assertions(1);
    expect(typeof config).toBe("object");
  });

  it("is a valid config", async () => {
    expect.assertions(2);
    const { errors, warnings } = await migrateAndValidate({}, config);
    expect(errors).toEqual([]);
    expect(warnings).toEqual([]);
  });
});
