<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');


Route::middleware(['auth', 'is_branch_manager'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('employees', 'Employees/Dashboard')->name('employees.dashboard');
    Route::inertia('salary', 'Salary/Dashboard')->name('salary.dashboard');
});


Route::middleware(['auth', 'is_cashier'])->group(function () {
    Route::inertia('cashier', 'Cashier/Dashboard')->name('cashier.dashboard');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';