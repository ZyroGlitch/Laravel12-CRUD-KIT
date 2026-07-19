<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            color: #0f172a;
            margin: 24px;
        }

        .header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #2563eb;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            width: 56px;
            height: 56px;
            object-fit: cover;
            border-radius: 8px;
        }

        .company-name {
            font-size: 18px;
            font-weight: bold;
            color: #0f172a;
            margin: 0;
        }

        .title {
            font-size: 22px;
            font-weight: bold;
            color: #1d4ed8;
            margin: 0;
        }

        .meta {
            margin-top: 6px;
            color: #475569;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th, td {
            border: 1px solid #cbd5e1;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #F5F5F5;
            color: black;
        }

        tr:nth-child(even) {
            background-color: #f8fafc;
        }

        .footer-table {
            width: 100%;
            margin-top: 30px;
            border-collapse: collapse;
        }

        .footer-table td {
            width: 50%;
            text-align: center;
            border: none;
            padding-top: 40px;
            vertical-align: bottom;
        }

        .signature-line {
            display: inline-block;
            width: 80%;
            border-top: 1px solid #94a3b8;
            padding-top: 6px;
            font-size: 11px;
            color: #334155;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="brand">
            <img src="{{ public_path('company_logo.jpg') }}" alt="Company Logo" class="logo">
            <div>
                <h2 class="company-name">Crafts Company</h2>
                <div class="meta">User Report</div>
            </div>
        </div>
        <div>
            <h1 class="title">{{ $title }}</h1>
            <div class="meta">Generated on: {{ $date }}</div>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{ $user->id }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->role }}</td>
                    <td>{{ $user->created_at->format('d-m-Y') }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {{-- <div class="footer">
        <div class="signature-block">
            <div class="signature-line">Prepared By: Name</div>
        </div>
        <div class="signature-block">
            <div class="signature-line">Approved By: Name</div>
        </div>
    </div> --}}

    <table class="footer-table">
    <tr class="footer-row">
        <td>
            <div class="signature-line">Prepared By: Name</div>
        </td>
        <td>
            <div class="signature-line">Approved By: Name</div>
        </td>
    </tr>
</table>
</body>
</html>
