<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FloorsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('floors')->insert([
            ['name' => 'Одноэтажный', 'value' => 1, 'multiplier' => 1, 'description' => 'Одноэтажный дом - классическое решение для небольшой семьи', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Двухэтажный', 'value' => 2, 'multiplier' => 1.8, 'description' => 'Двухэтажный дом - оптимальное использование земельного участка', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Трехэтажный', 'value' => 3, 'multiplier' => 2.5, 'description' => 'Трехэтажный дом - идеальный выбор для большой семьи', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Четырехэтажный', 'value' => 4, 'multiplier' => 3.0, 'description' => 'Четырехэтажный дом - максимальное использование пространства', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }
} 