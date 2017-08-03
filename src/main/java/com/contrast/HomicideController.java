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
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/api/homicide")
public class HomicideController {

    public String data;

    HomicideController() throws IOException {
        ExternalData fromAPI = new ExternalData();
        data = fromAPI.getExternalData("https://data.baltimorecity.gov/resource/9h5s-7d88.json");
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public HashMap<String, Integer> getHomicides() throws Exception {
        List<DataRow> homicideData = new ArrayList<>();
        DataProcess dataProcess = new DataProcess();

        JsonFactory f = new JsonFactory();
        JsonParser jp = f.createJsonParser(data);
        jp.nextToken();

        JSONArray jsonarray = new JSONArray(data);

        for (int i = 0; i < jsonarray.length(); i++) {
            JSONObject jsonobject = jsonarray.getJSONObject(i);
            String name = jsonobject.getString("crimedate");
            String neighborhood = jsonobject.getString("neighborhood");

            homicideData.add(new DataRow(name, neighborhood));
        }

        return dataProcess.process(homicideData);
    }
}
