package com.climateapp.climateapp.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.climateapp.data.v4data;
import com.climateapp.climateapp.data.v5data;
import com.climateapp.climateapp.service.dataService;

@RestController
public class ClimateappRest {

    @Autowired
    dataService dataService;

    /*@GetMapping("/test")
    public List<v4data> searchByCountry(@RequestParam String keyword){
        return dataService.searchByCountry(keyword);
    }*/

    @GetMapping("/")
    public List<v5data> getv5sectorInfo(){
        return dataService.getv5sectorInfo();
    }
    
}
