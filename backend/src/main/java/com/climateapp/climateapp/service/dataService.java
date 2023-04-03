package com.climateapp.climateapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateapp.climateapp.data.v4data;
import com.climateapp.climateapp.data.v5data;
import com.climateapp.climateapp.repo.v4Repository;
import com.climateapp.climateapp.repo.v5Repository;

@Service
public class dataService {
    @Autowired
    v4Repository v4Repo;
    @Autowired
    v5Repository v5Repo;

    public List<v4data> searchByCountry(String keyword){
        return v4Repo.findByCountry(keyword);
    }

    public List<v5data> getv5sectorInfo(){
        return v5Repo.getv5Sector();
    }
/*
    @Autowired
    EmployeeRepository empRepo;


     //Etsii hakusanalla työntekijöiden nimiä

    public List<String> searchNamesByKeyword(String keyword){
        return empRepo.getEmployeeNamesByKeyword(keyword);
    }


     //Hakee työntekijöiden nimen ja työpaikan nimen olioina.

    public List<EmployeeInfoDto> getEmployeeInfos(){
        return empRepo.getEmpoyeeInfos();
    }*/
}
