package com.devrhythm.music;

import android.util.Log;

public class TermuxPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
