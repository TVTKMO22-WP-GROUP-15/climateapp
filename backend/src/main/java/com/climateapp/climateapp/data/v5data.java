package com.climateapp.climateapp.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

@Entity
@Table(name="v5sector")
//@SecondaryTable(name="v5subsector")
public class v5data {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="sector")
    public String sector;
    @Column(name="share_of")
    public Double share_of;
        
    public v5data() {
    }

    public String getSector() {
        return this.sector;
    }

    public Double getShare_of() {
        return this.share_of;
    }

}
