export interface RandomDateOptions {
    minDaysAgo: number;
    maxDaysAgo: number;
}
declare const randomDate: (options?: {
    minDaysAgo: number;
    maxDaysAgo: number;
}) => string;
export default randomDate;
