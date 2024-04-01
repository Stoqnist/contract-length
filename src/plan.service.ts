import {IsoDate} from "./types/iso-date";
import {DurationInMonths} from "./types/duration-in-months";

export class PlanService {
  private readonly rufflyMillisecondsInOneMonth = 1000 * 60 * 60 * 24 * 30;
  public getContractLength(startDate: IsoDate, endDate: IsoDate): DurationInMonths {
    return Math.round((new Date(endDate).getTime() - new Date(startDate).getTime()) / this.rufflyMillisecondsInOneMonth);
  }

}