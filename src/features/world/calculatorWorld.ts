import { Calculator } from "../../app/calculator";
import { World } from "cucumber";

declare module "cucumber" {
    interface World {
        calculator: Calculator;
        actual: number;
        error: Error
    }
}