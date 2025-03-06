<?php

namespace App\Actions\Mail;

use App\Mail\Contact;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Lorisleiva\Actions\Concerns\AsAction;

class SendEmail
{
    use AsAction;

    public string $commandSignature = 'send:email {name} {email} {content}';
    public string $commandDescription = 'Sends an email.';

    public function handle($name, $email, $content)
    {
        $subject = 'Contact via Portfolio';

        Mail::to(config('mail.to.address'))
        ->send(new Contact($subject, $content, $name, $email));

        // Mail::send('emails.content', $data,  function ($message) use ($name, $email, $subject) {
        //     $message->to(env('MAIL_FROM_ADDRESS', 'weigandshawn@gmail.com'))
        //             ->from($email, $name)
        //             ->subject($subject);
        // });

        return 'Email sent!';
    }

    public function asCommand(Command $command): void
    {
        $email = $this->handle('Johnny Test', 'jtest@hotmail.com', 'Hello this is the content.');
        $command->info('Done!');
    }
}
