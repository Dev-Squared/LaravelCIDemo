<?php

namespace App\Helpers;

class TextFormatHelper
{
    public static function toTitleCase($input)
    {
        return ucwords($input);
    }
}