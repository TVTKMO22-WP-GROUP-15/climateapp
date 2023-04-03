package com.climateapp.climateapp.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="v4emissions")
public class v4data {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;
    public Long year;
    @Column
    public String country;
    
    public v4data() {
    }

    public v4data(Long year, String country) {
        this.year = year;
        this.country = country;
    }

}
