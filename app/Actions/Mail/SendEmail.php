<?php

namespace App\Actions\Mail;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Lorisleiva\Actions\Concerns\AsAction;

class SendEmail
{
    use AsAction;

    public string $commandSignature = 'send:email';
    public string $commandDescription = 'Sends an email.';

    public function handle($name, $email, $content)
    {
        $subject = 'Test Email';

        $data = [
            'subject' => $subject,
            'content' => $content
        ];

        Mail::send('emails.content', $data,  function ($message) use ($name, $email, $subject) {
            $message->to(env('MAIL_FROM_ADDRESS', 'weigandshawn@gmail.com'))
                    ->from($email, $name)
                    ->subject($subject);
        });
        return 'Test email sent!';    }

    public function asCommand(Command $command): void
    {
        $email = $this->handle('Johnny Test', 'jtest@hotmail.com', 'Hello this is teh content.');
        $command->info('Done!');
    }
}
