<?php

namespace App\Http\Controllers;

use App\Actions\Mail\SendEmail;
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

        SendEmail::run($request->name, $request->email, $request->content);

    }
}
