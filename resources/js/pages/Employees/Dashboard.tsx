import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'Employees',
href: '/employees',
},
];

export default function Dashboard() {
const [date, setDate] = useState<Date |
    undefined>(new Date());

    return (
    <AppLayout breadcrumbs={breadcrumbs}>

        <Head title="Dashboard" />
        <div className="container mx-auto p-4">
            <section className="grid grid-cols-2 gap-x-4">
                <div className="space-y-2">
                    <div>
                        <h2 class="text-xl font-bold">Personal Information</h2>
                    </div>
                    <div>
                        <Label htmlFor="firstname">Firstname</Label>
                        <Input type="text"
                            id="firstname"
                            placeholder="e.g. John Ford" />
                    </div>

                    <div>
                        <Label htmlFor="lastname">Lastname</Label>
                        <Input type="text"
                            id="lastname"
                            placeholder="e.g. Buliag" />
                    </div>

                    <div>
                        <Label htmlFor="age">Age</Label>
                        <Input type="text"
                            id="age"
                            placeholder="e.g. 18" />
                    </div>

                    <div>
                        <Label htmlFor="birthdate">Birthdate</Label>
                        <Calendar mode="single"
                            selected={date}
                            onSelect={setDate}
                            captionLayout="dropdown"
                            className="rounded-lg border w-[400px] p-2" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div>
                        <h2 class="text-xl font-bold">Profile</h2>
                    </div>

                    <Card>
                        <CardContent className="p-4">
                            <label htmlFor="dropzone-file"
                                className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                                <h2
                                    className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                                    Payment File</h2>

                                <p
                                    className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                                    Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                <input id="dropzone-file"
                                    type="file"
                                    className="hidden" />
                            </label>
                        </CardContent>
                    </Card>
                </div>

            </section>
        </div>
    </AppLayout>
    );
    }
