<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Helpers\TextFormatHelper;

class HelperTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testTitleCaseSigleWord()
    {
        $formatted = TextFormatHelper::toTitleCase('test');
        $this->assertTrue($formatted == 'Test');
    }

    public function testTitleCaseMultiWord()
    {
        $formatted = TextFormatHelper::toTitleCase('hello there world');
            $this->assertTrue($formatted == 'Hello There World');
        }
}
