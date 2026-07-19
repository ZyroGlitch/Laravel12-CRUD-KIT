<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;

class PDFControllerCrafts extends Controller
{
    public function generatePDF()
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();

        $data = [
            'title' => 'User List Report',
            'date' => now()->format('d M Y'),
            'users' => $users,
        ];

        $pdf = Pdf::loadView('user-generate-pdf', $data)
            ->setPaper('a4', 'portrait')
            ->setOption('defaultFont', 'DejaVu Sans');

        return $pdf->download('users-list-PDF.pdf');
    }
}
