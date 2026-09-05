<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::resource('products', \App\Http\Controllers\ProductController::class)->except(['create', 'edit', 'show']);
});

// Settings routes
require __DIR__ . '/settings.php';
