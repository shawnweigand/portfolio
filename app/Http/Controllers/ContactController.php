<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => [ 'required', 'max:255' ],
            'email' => [ 'required', 'email', 'max:255' ],
            'content' => [ 'required', 'max:500' ]
        ]);



        dd($request->all());
    }
}
