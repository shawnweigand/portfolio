<?php

namespace App\Actions\Medium;

use DOMDocument;
use DOMXPath;
use Illuminate\Console\Command;
use Lorisleiva\Actions\Concerns\AsAction;
use stdClass;

class GetArticles
{
    use AsAction;

    public string $commandSignature = 'get:articles';
    public string $commandDescription = 'Gets Medium articles for a user.';

    protected string $url;
    protected array $articles;

    // Construct with URL and articles
    public function __construct()
    {
        $this->url = "https://medium.com/feed/@weigandshawn";
        $this->articles = [];
    }

    public function handle()
    {
        $rss = simplexml_load_file($this->url);

        foreach ($rss->channel->item as $item) {

            $article = new stdClass();

            $article->title = (string) $item->title;
            $article->link = (string) $item->link;
            $article->pubDate = (string) $item->pubDate;

            array_push($this->articles, $article);
        }

        return $this->articles;

    }

    public function asCommand(Command $command): void
    {
        $articles = $this->handle();
        $command->info('Done!');
        dump($articles);
    }
}
