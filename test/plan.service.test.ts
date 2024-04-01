import {PlanService} from "../src/plan.service";

describe('PlanService', () => {
    const planService = new PlanService();

    describe('getContractLength', () => {
        it('should return 1 when startDate is 2021-01-01 and endDate is 2021-02-01', () => {
            expect(planService.getContractLength('2021-01-01', '2021-02-01')).toBe(1);
        });

        it('should return -1 when startDate is 2021-01-01 and endDate is 2021-02-01', () => {
            expect(planService.getContractLength('2021-02-01', '2021-01-01')).toBe(-1);
        });
    });

});