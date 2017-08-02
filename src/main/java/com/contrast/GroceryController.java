package com.contrast;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api/grocery")
public class GroceryController {

    public String data;

    GroceryController() throws IOException {
        ExternalData fromAPI = new ExternalData();
        data = fromAPI.getExternalData("https://data.baltimorecity.gov/resource/8gms-s9we.json");
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<GroceryRow> getGroceryStores() throws Exception {
        List<GroceryRow> groceryData = new ArrayList<>();

        JsonFactory f = new JsonFactory();
        JsonParser jp = f.createJsonParser(data);
        jp.nextToken();

        JSONArray jsonarray = new JSONArray(data);

        for (int i = 0; i < jsonarray.length(); i++) {
            JSONObject jsonobject = jsonarray.getJSONObject(i);
            String name = jsonobject.getString("name");
            String neighborhood = jsonobject.getString("neighborhood");

            groceryData.add(new GroceryRow(name, neighborhood));
        }

        return groceryData;
    }

    private class GroceryRow {
        public String name;
        public String neighborhood;

        GroceryRow(String name, String neighborhood) {
            this.name = name;
            this.neighborhood = neighborhood;
        }
    }

}
