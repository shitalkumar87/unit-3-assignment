import { getdata } from "../script/random";

test('testing fetching of data', ()=>{

    // getdata('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{

    // expect(res).toEqual(data);

    // });

     let data=await getdata('https://www.themealdb.com/api/json/v1/1/random.php');
      expect(data).toBeTruthy()

    //https://www.themealdb.com/api/json/v1/1/random.php

});