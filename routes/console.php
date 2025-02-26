<?php

use App\Mail\Contact;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Artisan::command('mail', function () {
    $subject = 'Contact via Portfolio';
    $content = 'Hello this is the content.';
    $name = 'Johnny Test';
    $email = 'johnnytest@email.com';

    Mail::to(config('mail.to.address'))
    ->send(new Contact($subject, $content, $name, $email));

    dump('Mail command');
})->purpose('Email with mailgun');
