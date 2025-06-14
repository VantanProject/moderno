<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'furniture_id',
        'count',
        'is_shipped',
        'is_completed',
    ];

    public function furniture() {
        return $this->belongsTo(Furniture::class);
    }
}
