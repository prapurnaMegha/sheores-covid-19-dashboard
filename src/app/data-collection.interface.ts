export interface IData {
    cases_time_series: ITimeSeriesCases[];
    statewise: IStatewise[];
    tested: ITested[];
}
export interface IStatewise {
    active:number;
    confirmed:number;
    deaths:number;
    delthaconfirmed:number;
    deltadeaths:number;
    deltarecovered:number;
    lastupdatedtime: Date;
    recovered:number;
    state:string;
    statecode:string;
    statenotes:string;
}
export interface ITested {
    individualstestedperconfirmedcase:DoubleRange;
    positivecasesfromsamplesreported:number;
    samplereportedtoday:number;
    source:string;
    testpositivityrate:number;
    testsconductedbyprivatelabs:number;
    testsperconfirmedcase: Date;
    totalindividualstested:number;
    totalpositivecases:string;
    totalsamplestested:string;
    updatetimestamp:Date;
}
export interface ITimeSeriesCases {
    dailyconfirmed: number;
    dailydeceased: number;
    dailyrecovered:number;
    date: string;
    totalconfirmed: number;
    totaldeceased:number;
    totalrecovered: number;
}
