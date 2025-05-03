<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FloorController;
use App\Http\Controllers\RoofController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\FoundationController;
use App\Http\Controllers\FacadeController;
use App\Http\Controllers\ElectricalController;
use App\Http\Controllers\WallFinishController;
use App\Http\Controllers\AdditionController;

Route::get('/', function () {
    return view('index');
});

Route::get('/calc', function () {
    return view('calc');
});

Route::get('/reviews', function () {
    return view('reviews');
});

Route::get('/galery', function () {
    return view('galery');
});

Route::get('/contacts', function () {
    return view('contacts');
});

Route::get('/admin', function () {
    return view('admin');
});

Route::post('/send-feedback', [FeedbackController::class, 'sendFeedback'])->name('send.feedback');

Route::prefix('admin')->group(function () {
    Route::get('/types', [AdminController::class, 'index'])->name('admin.types.index');
    Route::get('/types/{id}/edit', [AdminController::class, 'edit'])->name('admin.types.edit');
    Route::post('/types/{id}', [AdminController::class, 'update'])->name('admin.types.update');
});

Route::resource('floors', FloorController::class);
Route::resource('roofs', RoofController::class);
Route::resource('materials', MaterialController::class);
Route::resource('foundations', FoundationController::class);
Route::resource('facades', FacadeController::class);
Route::resource('electrical', ElectricalController::class);
Route::resource('wall-finishes', WallFinishController::class);
Route::resource('additions', AdditionController::class);
