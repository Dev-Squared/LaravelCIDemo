<?php

Route::group(['prefix' => '/v1', 'as' => 'api.'], function () {
    Route::post('format', 'FormatController@format');
});