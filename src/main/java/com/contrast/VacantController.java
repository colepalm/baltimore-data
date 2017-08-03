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
@RequestMapping("/api/vacant")
public class VacantController {

    public String data;

    VacantController() throws IOException {
        ExternalData fromAPI = new ExternalData();
        data = fromAPI.getExternalData("https://data.baltimorecity.gov/resource/rw5h-nvv4.json");
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public HashMap<String, Integer> getVacantData() throws Exception {
        List<DataRow> vacancyData = new ArrayList<>();
        DataProcess dataProcess = new DataProcess();

        JsonFactory f = new JsonFactory();
        JsonParser jp = f.createJsonParser(data);
        jp.nextToken();

        JSONArray jsonarray = new JSONArray(data);

        for (int i = 0; i < jsonarray.length() - 1; i++) {
            JSONObject jsonobject = jsonarray.getJSONObject(i);
            String referenceId = jsonobject.getString("referenceid");
            String neighborhood = jsonobject.getString("neighborhood");

            vacancyData.add(new DataRow(referenceId, neighborhood));
        }

        return dataProcess.process(vacancyData);
    }
}
