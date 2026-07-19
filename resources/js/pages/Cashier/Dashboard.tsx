import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cashier',
        href: '/cashier',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Cashier" />

            <div>
                <h1 className="text-center text-4xl">WELCOME TO CASHIER DASHBOARD</h1>
            </div>
        </AppLayout>
    );
}
