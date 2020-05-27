import { Component, OnInit } from '@angular/core';
import { PositionsService } from '../api/positions.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Models} from "src/app/model/models";

@Component({
  selector: 'app-sequence-template',
  templateUrl: './sequence-template.component.html',
  styleUrls: ['./sequence-template.component.css']
})
export class SequenceTemplateComponent implements OnInit {
  public dark: true;
    public disabled: boolean;
    public tooltipContent: "hi click me";
    public tooltipPlacement: 'top' | 'right' | 'left' | 'bottom';
    public type: 'primary' | 'secondary' | 'special';
    public value: "Click";
    public placeholder: string;

  _subscription:Subscription;
  CurrentScan = [];
  PreviousScan =  [];
  MaxColumn:number;
  MaxRow:number;
  changedBarcode = [];

     count = 2;
     rowItems=[
      {
        "sampleType" : "Sample Type-1",
        "AcqMethod" :"Acq. Methode-1",
        "sampleAmount" :"10 ml",
        "sampleName" :"Sample-1",
        "Location":"(x,y)",
        "Barcode":"Empty"
      }
    ];

    public addRow(change): void {
      var position = change.slice(0,3);
      var barcode = change.slice(4,14);
      this.rowItems.push(
      { 
      "sampleType" : `Sample Type-${this.count}`,
      "AcqMethod" : `Acq. Methode-${this.count}`,
      "sampleAmount" :`${this.count}0 ml`,
      "sampleName" :`Sample-${this.count}`,
      "Location": position,
      "Barcode": barcode
     });
     this.count++
    }

  
   public ValueAtPosition(column:number,row:number,scanResult:[any]):string{
     var barcode = "";
     scanResult.forEach(vial =>{
      if(vial.column == column && vial.row == row){
        barcode = vial.value;
      }
     });
     return barcode;
   }
   
   public CompareScanResults(CurrentScan,PreviousScan):void{
    this.changedBarcode = [];
    for(var column = this.MaxColumn; column >= 1; column-- ){
      for(var row = this.MaxRow; row >= 1; row --){
          var barCodeValueTwo = this.ValueAtPosition(column, row, CurrentScan);
          var barCodeValueOne = this.ValueAtPosition(column, row, PreviousScan);
          if (barCodeValueOne != barCodeValueTwo) {
             this.changedBarcode.push(+column+ ","+row+ "," +barCodeValueTwo)
          }else{
            this.changedBarcode.push("No Change");
          }
      }
  }
 
}
   

constructor(private _positionsService: PositionsService) { }

  ngOnInit() {
    this._subscription = timer(0,5000).pipe(switchMap(() =>this._positionsService.apiPositionsGet())
    ).subscribe(data =>{
      console.log(data);
     this.MaxColumn = Math.max.apply(Math,data.map(function(o){return o.column;}));
     this.MaxRow = Math.max.apply(Math,data.map(function(o){return o.row;}));
     this.CurrentScan = data;
      
      if(this.PreviousScan.length == 0){
        this.PreviousScan = this.CurrentScan;
        console.log("First Scan");
      }else{
        this.CompareScanResults(this.CurrentScan,this.PreviousScan);
        var count = 0;
        this.changedBarcode.forEach(element => {
          if(element == "No Change"){
                count++;
          }else{
            this.addRow(element);
            console.log(element);
          }
        });if(count == 54){console.log("No change in Vial Position");}
        this.PreviousScan = this.CurrentScan; 
      }
    });
  }
}
