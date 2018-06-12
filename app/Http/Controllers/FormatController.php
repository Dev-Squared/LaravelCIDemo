<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FormatController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function format(Request $request)
    {
        $text = $request->input('text');

        return ucwords($text);
    }
}