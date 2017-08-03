package com.contrast;

import java.util.HashMap;
import java.util.List;

public class DataProcess {
    

    public HashMap<String, Integer> process (List<DataRow> DataRows) {

        HashMap<String, Integer> hmap = new HashMap<>();

        for (DataRow obj : DataRows) {
            String key = obj.neighborhood;

            if (hmap.containsKey(key))
                hmap.put(key, hmap.get(key) + 1);

            else
                hmap.put(key, 1);
        }

        return hmap;
    }
}