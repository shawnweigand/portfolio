<?php

namespace App\Actions\Medium;

use Carbon\Carbon;
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

    function getImage($html) {
        $dom = new DOMDocument();
        libxml_use_internal_errors(true); // Suppress errors due to malformed HTML
        $dom->loadHTML($html);
        libxml_clear_errors();

        $imageTags = $dom->getElementsByTagName('img');

        $imageUrl = '';
        if ($imageTags->length > 0) {
            $imageUrl = $imageTags->item(0)->getAttribute('src');
        }

        return $imageUrl;
    }

    function getDescription($html) {
        $dom = new DOMDocument();
        libxml_use_internal_errors(true); // Suppress errors due to malformed HTML
        $dom->loadHTML($html);
        libxml_clear_errors();

        // Find <p> elements with class "medium-feed-snippet"
        $xpath = new DOMXPath($dom);
        $snippetNodes = $xpath->query('//p[@class="medium-feed-snippet"]');

        $snippet = '';
        if ($snippetNodes->length > 0) {
            $snippet = html_entity_decode($snippetNodes->item(0)->nodeValue);
        }

        return $snippet;
    }

    function getDescriptionWithoutDescription($html) {
        $dom = new DOMDocument();
        libxml_use_internal_errors(true); // Suppress warnings from malformed HTML
        $dom->loadHTML($html);
        libxml_clear_errors();

        // Initialize DOMXPath for searching
        $xpath = new DOMXPath($dom);

        // Find the first <p> element after the <figure> element
        $pElements = $xpath->query("//p");

        // Extract the first <p> text content
        if ($pElements->length > 0) {
            $firstPContent = $pElements[0]->textContent;

            // Split into words and get the first 25
            $words = explode(' ', $firstPContent);
            $first25Words = array_slice($words, 0, 25);

            // Convert back to a string
            $result = implode(' ', $first25Words) . "...";
            return $result;
        } else {
            return;
        }
    }

    public function handle()
    {
        $rss = simplexml_load_file($this->url);

        foreach ($rss->channel->item as $item) {

            $article = new stdClass();

            $article->title = (string) $item->title;
            $article->link = (string) $item->link;
            $article->pubDate = Carbon::parse((string) $item->pubDate)->format('M d, Y');

            $html = isset($item->description) ? $item->description : $item->children('content',true)->encoded;

            $article->image = $this->getImage($html);
            $article->description = isset($item->description) ? $this->getDescription($html) : $this->getDescriptionWithoutDescription($html);

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
