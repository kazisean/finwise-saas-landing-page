import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Kazi',
        role: 'Homeless Entrepenur at Starbucks',
        message: `${siteDetails.siteName}'s payment system forced me to get this job because I couldn't pay my bills.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Willem',
        role: 'Visionary',
        message: `I'm a visionary. I see the future. I see LoanMe.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Robert Battle',
        role: 'Disgruntled Hacker',
        message: `It's getting harder and harder to klarna my Starbucks. LoanMe helps me get the cash I need now, because I won't have it later.`,
        avatar: '/images/testimonial-3.webp',
    },
];