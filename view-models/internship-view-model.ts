export interface IInternship {
    city: string;
    company: string;
    companyLogoUrl: string;
    companyUrl: string;
    countryCode: string;
    deadline: string;
    description: string;
    endDate: string;
    id: number;
    industry: string;
    jobUrl: string;
    name: string;
    pay: string;
    period: string;
    postedDate: string;
    qualification: string;
    startDate: string;
    state: string;
    isSelected?: boolean;
}

export interface IFilterRequestPayload {
    qualification: string;
    period: string;
    industry: string;
    freeText?: string;
}