<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CashierMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated and has the role of 'Cashier'
        if (Auth::check()) {
            if (Auth::user()->role === 'Cashier') {
                return $next($request);
            }

            abort(403, 'Forbidden: You do not have permission to access this resource.');
        }

        abort(401, 'Unauthorized action.');
    }
}
