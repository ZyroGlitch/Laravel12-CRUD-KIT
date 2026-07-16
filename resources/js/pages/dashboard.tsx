import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {Users,CircleCheck, Clock }from'lucide-react';

import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Bar, BarChart, XAxis } from "recharts"
import {
ChartContainer,
type ChartConfig,
ChartTooltip,
ChartTooltipContent,
ChartLegend,
ChartLegendContent,
} from "@/components/ui/chart"

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Dashboard',
href: '/dashboard',
},
];

const chartData = [
{ month: "January", desktop: 186, mobile: 80 },
{ month: "February", desktop: 305, mobile: 200 },
{ month: "March", desktop: 237, mobile: 120 },
{ month: "April", desktop: 73, mobile: 190 },
{ month: "May", desktop: 209, mobile: 130 },
{ month: "June", desktop: 214, mobile: 140 },
{month: "July", desktop: 200, mobile: 150},
{month: "August", desktop: 209, mobile: 130},
{month: "September", desktop: 150, mobile: 21},
{month: "October", desktop: 256, mobile: 120},
{month: "November", desktop: 214, mobile: 124},
{month: "September", desktop: 222, mobile: 111},
]

const chartConfig = {
desktop: {
label: "Desktop",
color: "#2563eb",
},
mobile: {
label: "Mobile",
color: "#60a5fa",
},
} satisfies ChartConfig

export const description = "A stacked bar chart with a legend"
export const iframeHeight = "600px"
export const containerClassName = `[&>div]:w-full [&>div]:max-w-md flex items-center justify-center
min-h-svh`

export default function dashboard() {
return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="Dashboard" />
    <div className="container mx-auto p-4">
        <section className="grid grid-cols-3 items-center space-x-4 pb-4">
            <Card>
                <CardContent className="p-4">
                    <div className="grid grid-cols-12 space-x-4">
                        <div
                            className="col-span-3 bg-slate-200 rounded-lg flex justify-center items-center">
                            <Users />
                        </div>

                        <div className="col-span-8">
                            <h3 className="text-sm text-gray-500">Total Employees</h3>
                            <h2 className="text-2xl font-bold">150</h2>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
               <CardContent className="p-4">
                    <div className="grid grid-cols-12 space-x-4">
                        <div
                            className="col-span-3 bg-slate-200 rounded-lg flex justify-center items-center">
                            <CircleCheck />
                        </div>

                        <div className="col-span-8">
                            <h3 className="text-sm text-gray-500">Salary Approved</h3>
                            <h2 className="text-2xl font-bold">150</h2>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="grid grid-cols-12 space-x-4">
                        <div
                            className="col-span-3 bg-slate-200 rounded-lg flex justify-center items-center">
                            <Clock />
                        </div>

                        <div className="col-span-8">
                            <h3 className="text-sm text-gray-500">Salary Pending</h3>
                            <h2 className="text-2xl font-bold">150</h2>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <section className="py-1">
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>

                    <div className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </div>
                </CardHeader>

                <CardContent>
                    <ChartContainer config={chartConfig}
                        className="min-h-[200px] w-full">
                        <BarChart accessibilityLayer
                            data={chartData}>
                            <XAxis dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value)=> value.slice(0, 3)}
                                />
                                <ChartTooltip cursor={false}
                                    content={<ChartTooltipContent
                                    hideLabel />}
                                />
                                <Bar dataKey="desktop"
                                    stackId="a"
                                    fill="var(--color-desktop)"
                                    radius={[0,
                                    0,
                                    4,
                                    4]} />
                                <Bar dataKey="mobile"
                                    stackId="a"
                                    fill="var(--color-mobile)"
                                    radius={[4,
                                    4,
                                    0,
                                    0]} />
                                <ChartLegend content={<ChartLegendContent />} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>

            </Card>
        </section>
    </div>
</AppLayout>
);
}
