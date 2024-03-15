<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function index(Request $request)
{
    $user_id = $request->input('user_id');
    $notifications = Notification::where('user_id', $user_id)
                                  ->orderBy('created_at', 'desc') // Sắp xếp mới nhất trước
                                  ->paginate(7);
    return response()->json($notifications);
}


    public function store(Request $request)
    {
        $notification = Notification::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'user_id' => $request->input('user_id'),
            'read' => $request->input('read'),
        ]);
        return response()->json($notification, 201);
    }

    public function update(Request $request, $id)
    {
        $notification = Notification::findOrFail($id);
        $notification->update([
            'read' => 1,
        ]);
        return response()->json($notification, 200);
    }


    public function destroy($id)
    {
        $notification = Notification::findOrFail($id);
        $notification->delete();
        return response()->json(null, 204);
    }
}
