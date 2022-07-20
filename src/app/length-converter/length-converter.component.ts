import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'length-converter',
  templateUrl: './length-converter.component.html',
  styleUrls: ['./length-converter.component.css']
})
export class LengthConverterComponent implements OnInit {

  selectValue1: string = "Kilometre";
  selectValue2: string = "Kilometre";

  length1:number=0
  length2:number=0;

  

  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  ngOnInit() {

  }

  convert1(data:string){
    let value=Number(data);
    this.length1=value;

    if(this.selectValue1 === 'Kilometre'){
      if(this.selectValue2 === 'Kilometre'){
        this.length2=this.length1;
        console.log("Both are kilometres")

      } else if(this.selectValue2 === 'Metre'){
        this.length2=this.length1*1000;
        console.log("One is kilometres and metre");
      } else{
        this.length2=this.length1*1000*100;
        console.log("One is kilometres and centi metre");
      }
    }

  }

  convert2(data:string){
    let value=Number(data);
    this.length2=value;

    if(this.selectValue2 === 'Kilometre'){
      if(this.selectValue1 === 'Kilometre'){
        this.length1=this.length2;
        console.log("Both are kilometres")

      } else if(this.selectValue1 === 'Metre'){
        this.length1=this.length2*1000;
        console.log("One is kilometres and metre");
      } else{
        this.length1=this.length2*1000*100;
        console.log("One is kilometres and centi metre");
      }
    }

  }

  selectChange(){

    if(this.selectValue1 === 'Kilometre'){
      if(this.selectValue2 === 'Kilometre'){
        this.length2=this.length1;
        console.log("Both are kilometres")

      } else if(this.selectValue2 === 'Metre'){
        this.length2=this.length1*1000;
        console.log("One is kilometres and metre");
      } else{
        this.length2=this.length1*1000*100;
        console.log("One is kilometres and centi metre");
      }
    }

    else if(this.selectValue1 === 'Metre'){
      if(this.selectValue2 === 'Kilometre'){
        this.length2=this.length1/1000;
        console.log("one is metre and kilometres")

      } else if(this.selectValue2 === 'Metre'){
        this.length2=this.length1;
        console.log("Both are metre");
      } else{
        this.length2=this.length1*100;
        console.log("One is metres and centi metre");
      }
    }

    else{
      if(this.selectValue2 === 'Kilometre'){
        this.length2=this.length1/(1000*100);
        console.log("one is centi metre and kilometres")

      } else if(this.selectValue2 === 'Metre'){
        this.length2=this.length1/100;
        console.log("Both are metre");
      } else{
        this.length2=this.length1;
        console.log("One is metres and centi metre");
      }
    }

  }

  selectChange1(){

    if(this.selectValue2 === 'Kilometre'){
      if(this.selectValue1 === 'Kilometre'){
        this.length1=this.length2;
        console.log("Both are kilometres")

      } else if(this.selectValue1 === 'Metre'){
        this.length1=this.length2*1000;
        console.log("One is kilometres and metre");
      } else{
        this.length1=this.length2*1000*100;
        console.log("One is kilometres and centi metre");
      }
    }

    else if(this.selectValue2 === 'Metre'){
      if(this.selectValue1 === 'Kilometre'){
        this.length1=this.length2/1000;
        console.log("one is metre and kilometres")

      } else if(this.selectValue1 === 'Metre'){
        this.length1=this.length2;
        console.log("Both are metre");
      } else{
        this.length1=this.length2*100;
        console.log("One is metres and centi metre");
      }
    }

    else{
      if(this.selectValue1 === 'Kilometre'){
        this.length1=this.length2/(1000*100);
        console.log("one is centi metre and kilometres")

      } else if(this.selectValue1 === 'Metre'){
        this.length1=this.length2/100;
        console.log("Both are metre");
      } else{
        this.length1=this.length2;
        console.log("One is metres and centi metre");
      }
    }

  }

  

}
