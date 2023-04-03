package com.climateapp.climateapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.climateapp.climateapp.data.v4data;


@Repository
public interface v4Repository extends JpaRepository<v4data, Long> {

    //JPA kustom queryjä voidaan tehdä find metodeilla. Alla olevat esim. mapataan suoraan sql-kyselyiksi.
    //By-sanan jälkeen tulee etsittävä kenttä esim. findByName --> name
    //https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories

    //Etsii country-jäsenmuuttujan perusteella
    List<v4data> findByCountry(String country);    
    
    //Voidaan myös tehdä täysin natiiveja SQL-kyselyjä. Haetaan kaikkien työntekijöiden yrityksen id
    //@Query("Select a from v4data a")
    //List<v4data> findByCountry(String country);
/*
    //Etsii jos name-jäsenmuuttuja sisältää
    List<v4data> findByNameContains(String keyword);

    //Etsii työntekijät joiden id pienempi kuin limit
    List<v4data> findByIdLessThan(Long limit);


    //JPQL-formaatilla voidaan tehdä SQL-tyylisiä kyselyjä käyttäen olioita ja parametreja
    
    //Palautustyyppi vastaa haetun sarakkeen tietotyyppiä (e.name --> String)
    @Query("SELECT e.name FROM Employee e")
    List<String> getEmployeeNames();

    //Parametri kaksoispisteellä kyselyyn
    @Query("SELECT e.name FROM Employee e WHERE e.name LIKE %:keyword%")
    List<String> getEmployeeNamesByKeyword(String keyword);

    //Useampi sarake talletetaan kustomoituun DTO-olioon.
    //Aliaksilla erotellaan nimet DTO:hon  ename-->getEname  cname-->getCname
    @Query("SELECT e.name as ename, c.name as cname FROM Employee e JOIN Company c ON e.companyId=c.id")
    List<EmployeeInfoDto> getEmpoyeeInfos();

    //Voidaan myös tehdä täysin natiiveja SQL-kyselyjä. Haetaan kaikkien työntekijöiden yrityksen id
    @Query(value="SELECT company_id FROM employee", nativeQuery = true)
    List<Long> getCompanyIds();

*/
    
}
