<?php

namespace App\Http\Controllers;

use App\Models\Type; // Убедитесь, что модель Type существует
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $types = Type::all(); // Получаем все типы
        return view('admin.types.index', compact('types')); // Отображаем их в представлении
    }

    public function edit($id)
    {
        $type = Type::findOrFail($id); // Находим тип по ID
        return view('admin.types.edit', compact('type')); // Отображаем форму редактирования
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'value' => 'required|numeric',
        ]);

        $type = Type::findOrFail($id);
        $type->update($request->all()); // Обновляем данные
        return redirect()->route('admin.types.index')->with('success', 'Тип успешно обновлен!');
    }
}
