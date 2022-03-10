<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts()
    {
        $products = Product::all();
        return $products;
    }

    public function getProductbySlug(Request $request)
    {
        $product = Product::where('slug', $request->slug)->get();
        return $product;
    }
}
