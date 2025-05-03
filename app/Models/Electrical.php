<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Electrical extends Model
{
    protected $fillable = [
        'name',
        'price',
        'description',
        'image'
    ];
} 